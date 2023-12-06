const {Router} = require('express') //appel de librairie express.router (const Router = require('express').Router)

//liste des fonctions controleurs
const userControleur = require("../api/controleurUser.js")
const authControleur = require("../api/controleurAuth.js")
const middleware = require("../middleware/tokenMiddleware.js")


//avec json
module.exports = function getRouter() {
    const router = Router()
    //liste des routes
    router.get('/api/v1/user', userControleur.controleurUser)

    return router
}

//avec BDD
module.exports = function getRouter(){
    const router = Router()
    //liste des routes
    router.post('/api/v2/user',userControleur.controleurCreateUser)
    router.post('/api/v2/login',userControleur.controleurLogin) //authentification : connexion, POST = envoi de données et reponse
    router.get('/refreshToken', authControleur.refreshToken);
    return router
}

