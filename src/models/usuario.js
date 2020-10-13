module.exports = app => {
    let UsuariosSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
        email: {
            type: String,
            required: [true, 'é obrigatório'],
            match: [/\S+@\S+\.\S+/, "é inválido"]
        },
        senha: {
            type: String,
            required: [true, 'é obrigatório']
        }
    })
    app.db.mongoose.model("Usuarios", UsuariosSchema)
}