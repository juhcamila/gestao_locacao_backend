module.exports = app => {
    let MarcasCarrosSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
    })
    app.db.mongoose.model("MarcasCarros", MarcasCarrosSchema)
}