


const fs = require("fs") //librairie qui permet d'ouvrir des fichiers
const user = require("../model/modelUser.js").user //appel de la fonction Pokemon du modelPokemon.js
const bcrypt = require('bcrypt') //appel de librairie bcrypt pour crypter le password

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

