const dpe = require("../model/modelDpe.js") //import du model dpe
const debug = require('debug')('backend:services:recherche');

exports.recherche = async function (Etiquette_GES, Etiquette_DPE, Adresse) {
    debug('search by DPE, GES, Adresse ');

    let query = {}
    if (Etiquette_GES != undefined) {
        query.Etiquette_GES = Etiquette_GES
    }
    if (Etiquette_DPE != undefined) {
        query.Etiquette_DPE = Etiquette_DPE
    }
    if (Adresse != undefined) {
        query.Adresse = Adresse
    }


    const searchAppt = await dpe.find(query)
    return searchAppt
}