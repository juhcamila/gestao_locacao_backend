module.exports = (app) => {
    app.get("/modelos_carros/", app.controllers.modelosCarrosController.listarModelos)
    app.get("/modelos_carros/:id", app.controllers.modelosCarrosController.consultarPorId)
    app.post("/modelos_carros", app.controllers.modelosCarrosController.adicionar)
    app.put("/modelos_carros/:id", app.controllers.modelosCarrosController.atualizar)
    app.delete("/modelos_carros/:id", app.controllers.modelosCarrosController.excluir)
}