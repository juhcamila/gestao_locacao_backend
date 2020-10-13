const bcrypt = require("bcrypt");

module.exports = app => {
    return {
        criptografar: async (senha) => {
            const salt = await bcrypt.genSalt(10);
            const senha_criptografada = await bcrypt.hash(senha, salt)
            return senha_criptografada
        },
        validar: async (senha, senha_criptografada) => {
            return await bcrypt.compare(senha, senha_criptografada)
        }
    }
}