module.exports = app => {
    let EstadoVeiculosSchema = app.db.mongoose.Schema({
        nome: {
            type: String,
            required: [true, 'é obrigatório']
        },
        inicioQuilometragem: {
            type: Float64Array,
            required: [true, "é obrigatório"]
        },
        fimQuilometragem: {
            type: Float64Array,
            required: [true, "é obrigatório"]
        },
        danoFrontal: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoLateral: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoPosterior: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoInterior: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoMecanico: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoVidroEletrico: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoTravaEletrica: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoArCondicionado: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoBuzina: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoLuzes: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoBanco: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoSom: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        danoAlarme: {
            type: Boolean,
            required: [true, "é obrigatório"]
        },
        veiculo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Veiculo',
            required: [true, 'é obrigatório']
        },
    })
    app.db.mongoose.model("EstadoVeiculos", EstadoVeiculosSchema)
}