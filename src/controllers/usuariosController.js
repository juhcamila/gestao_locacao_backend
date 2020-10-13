const usuarios = require("../routes/usuarios")

module.exports = (app) => {
    let usuariosModel = app.db.mongoose.model("Usuarios")

    const usuariosController = {}

    usuariosController.listarUsuarios = async (req, res) => {
        let usuarios = await usuariosModel.find({})
        res.json(usuarios)
    }

    usuariosController.adicionar = async (req, res) => {
        try {
            let usuario = new usuariosModel(req.body)
            usuario.senha = await app.utils.encryption.criptografar(usuario.senha)
            if(await usuario.save()){
                res.send(`Usuário adicionado com sucesso - Id: ${usuario.id}`);
            } else {
                res.status(500).send("Erro ao adicionar usuário")
            }
        } catch (error) {
            res.send("Eror ao adicionar usuário: " + error);
        }
    }
    usuariosController.consultarPorId = async (req, res) => {
        try {
            let _id = req.params.id

            let usuario = await usuariosModel.findOne({ _id })
            if(usuario)
                res.json(usuario);
            else
                res.status(404).end()   
        } catch (error) {
            res.status(404).end()
        }
    }
    usuariosController.atualizar = async (req, res) => {
        try {
            let id = req.params.id
            let usuario = await usuariosModel.findById(id)
            usuario.nome = req.body.nome
            usuario.email = req.body.email
            if(req.body.senha)
                usuario.senha = await app.utils.encryption.criptografar(req.body.senha)

            if(await usuario.save())
                res.send("Usuário atualizado com sucesso!")
            else
               res.status(500).send("Erro ao atualizar usuário")
        } catch (error) {
            res.status(500).send(`Erro ao atualizar usuário: ${error}`)
        }
    }
    usuariosController.excluir = async (req, res) => {
        try {
            let id = req.params.id
            if(await usuariosModel.findByIdAndRemove(id))
                res.send("Usuário excluído com sucesso!")
            else
                res.status(500).send("Não foi possível excluir usuário")   
        } catch (error) {
            res.status(500).send(`Não foi possível excluir usuário: ${error}`)
        }
    }
    usuariosController.login = async (req, res) => {
        try {
            let email = req.body.email, 
                senha = req.body.senha
            
            let usuario = await usuariosModel.findOne({ email })
            if(!usuario)
                res.status(404).send("Usuário não encontrado")
            else if(! await app.utils.encryption.validar(senha, usuario.senha))
                res.status(404).send("Senha inválida")
            else {
                let payload = {
                    id: usuario._id,
                    email
                }
                let token = app.get("jwt").sign(payload, process.env.JWT_CHAVE_PRIVADA, { expiresIn: 60 * 60 * 24 })

                res.json({
                    token,
                    usuario
                })
            }
        } catch (error) {
            res.status(500).send(`Erro ao realizar login: ${error}`)
        }
    }

    return usuariosController;
}