const mongoose = require('mongoose')

module.exports = app => {
    mongoose.connect(`mongodb://${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Conexão foi realizada com o MongoDB"))
    .catch((err) => console.log(`Erro ao conectar ao no MongoDB: ${err}`))

    return mongoose;
}