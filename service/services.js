


const fs = require("fs") //librairie qui permet d'ouvrir des fichiers
const user = require("../model/modelUser.js").user //appel de la fonction Pokemon du modelPokemon.js
const bcrypt = require('bcrypt') //appel de librairie bcrypt pour crypter le password
const debug = require('debug')('TP_FINAL:service:services') //appel de librairie debug pour les logs

// 1 module par service
//Sans BDD
exports.servicesUser = function () {
    const data = fs.readFileSync("./userTemp.json") //ouverture du fichier user.json
    const dataparse = JSON.parse(data) 
    return dataparse 
}

//BDD
exports.servicesCreateUser = async function (name, email, password) {
    let sel = await bcrypt.genSalt(10) //génère un sel de 10 caractères
    let passwordcrypt = await bcrypt.hash(password, sel) //crypte le password avec le sel
    let new_user = await user.create({ name: name, email: email, password: passwordcrypt }); //création d'un nouvel utilisateur

    return new_user
}

//log 
/*
exports.logServicesLogin = async function (login, password) {
    debug('checking password : ', password, ' email : ', login)
    if(!login || !password) {
        return {message: "Utilisateur inconnu"}
    }
}
*/

exports.servicesLogin = async function (login, password) {
    try {
        return await user.findOne({ email: login }).then(async (user) => {
            if (!user) {
                return { message: "Utilisateur inconnu" }
            }
            else {
                let passwordcrypt = await bcrypt.compare(password, user.password) //compare le password avec le password crypté
                if (passwordcrypt) {
                    return { message: "Utilisateur connecté" }
                }
                else {
                    return { message: "Mot de passe incorrect" }
                }
            }
        })
    } catch (err) {
        debug('error searching for user : ', err)
        return { message: "Utilisateur inconnu" }
    }
}


