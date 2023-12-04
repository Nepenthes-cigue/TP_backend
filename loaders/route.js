const {Router} = require('express') //appel de librairie express.router (const Router = require('express').Router)

//liste des fonctions controleurs
const controleur = require("../api/controleur.js")

//avec json
module.exports = function getRouter() {
    const router = Router()
    //liste des routes
    router.get('/api/v1/user', controleur.controleurUser)

    return router
}

//avec BDD
module.exports = function getRouter(){
    const router = Router()
    //liste des routes
    router.post('/api/v2/user',controleur.controleurCreateUser)
    router.post('/api/v2/token',controleur.controleurLogin) //authentification : connexion, POST = envoi de données et reponse
    return router
}

