const fs = require('fs')

module.exports = function(app) {
    let ModelosCarrosModel = app.db.mongoose.model("ModelosCarros")

    return {
        listarModelos: function(req, res) {
            let search = req.body.search
            ModelosCarrosModel.find({
                nome: new RegExp(search)
            })
            .then((modelos) => {
                res.json(modelos)
            })
            .catch((err) => res.status(500).send(err))
        },
        adicionar: (req, res) => {
            try {
                let modelo = new ModelosCarrosModel(req.body)
                modelo.save((err) => {
                    if(err)
                        res.status(500).send(`Erro ao inserir: ${err}`)
                    else
                        res.send(`Modelo adicionado com sucesso - Id: ${modelo.id}`);
                });
            } catch (error) {
                res.send("Eror ao adicionar modelo: " + error);
            }
        },
        consultarPorId: async (req, res) => {
            try {
                let id = req.params.id
                let modelo = await ModelosCarrosModel.findById(id)
                if(modelo)
                    res.json(modelo)
                else
                    res.status(404).end();
            } catch (error) {
                res.status(404).send();
            }
        },
        atualizar: async (req, res) => {
            let id = req.params.id
            let modelo = req.body

            ModelosCarrosModel.findByIdAndUpdate(id, { $set: modelo } , (err) => {
                if(err)
                    res.status(500).send(`Erro ao atualizar modelo: ${err}`)
                else
                    res.send("Modelo atualizado com sucesso")
            })
        },
        excluir: (req, res) => {
            let id = req.params.id
            ModelosCarrosModel.findByIdAndRemove(id, (err) => {
                if(err)
                    res.status(500).send(`Erro ao excluir modelo: ${err}`)
                else
                    res.send("modelo excluído com sucesso")
            })
        }
    }
}