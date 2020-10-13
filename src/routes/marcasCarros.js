module.exports = (app) => {
    app.get("/marcas_carros/", app.controllers.marcasCarrosController.listarMarcas)
    app.get("/marcas_carros/:id", app.controllers.marcasCarrosController.consultarPorId)
    app.post("/marcas_carros", app.controllers.marcasCarrosController.adicionar)
    app.put("/marcas_carros/:id", app.controllers.marcasCarrosController.atualizar)
    app.delete("/marcas_carros/:id", app.controllers.marcasCarrosController.excluir)
}