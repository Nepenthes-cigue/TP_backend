const services = require("../service/services.js")

//Sans BDD
exports.controleurUser = function (req, res) {
    const user = services.servicesUser()
    res.status(200).json(user)
}

//Avec BDD
exports.controleurCreateUser = async function(req,res) {  
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password          
    const user = await services.servicesCreateUser(name, email, password)   
    res.status(200).json(user)
}

exports.controleurLogin = async function(req,res) {  
    const email = req.body.email
    const password = req.body.password          
    const login = await services.servicesLogin(email, password)   
    if (login.message == "Utilisateur inconnu") {
        res.status(401).json(login)
    }
    else {
        res.status(200).json(login)
    }
}