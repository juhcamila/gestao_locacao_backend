module.exports = app => {
    let AcessoriosSchema = app.db.mongoose.Schema({
        airbag: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        },
        alarme: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        },
        arCondicionado: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        },
        travaEletrica: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        },
        vidroEletrico: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        },
        cambio: {
            type: Boolean,
            required: [true, 'é obrigatório'],
        }
    })
    app.db.mongoose.model("Acessorios", AcessoriosSchema)
}