const {Router} = require('express') //appel de librairie express.router (const Router = require('express').Router)

//liste des fonctions controleurs
const rechercheControleur = require("../api/controleurRecherche.js")
const middleware = require("../middleware/tokenMiddleware.js")

module.exports = function getRouter(){
    const router = Router()
    //liste des routes
    router.post('/api/v2/search',middleware.tokenMiddleware,rechercheControleur.controleurRecherche)
    return router
}




