module.exports = app => {
    let ModelosCarrosSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
    })
    app.db.mongoose.model("ModelosCarros", ModelosCarrosSchema)
}