const services = require("../service/recherche.js")
const debug = require('debug')('TP_FINAL:controleur:controleurRecherche')


exports.controleurRechercheAppt = async function(req,res) {     //body quand dans zone de texte, query quand directement dans url
    const Etiquette_GES = req.body.Etiquette_GES
    const Etiquette_DPE = req.body.Etiquette_DPE
    const Adresse = req.body.Adresse
    const searchAppt = await services.recherche(Etiquette_GES, Etiquette_DPE, Adresse)
    res.status(200).json(searchAppt)

    //Verification des paramètres
    if (Etiquette_DPE == null || Etiquette_GES == null || Adresse == null) {
        return res.status(400).json({message: 'Vous devez spécifier les 3 paramètres de recherche'});
      } 
      debug('search by DPE, GES, Adresse ');
      services.recherche(Etiquette_DPE, Etiquette_GES, Adresse, (err, data) => { 
        if (err) return next(err);
        return res.status(200).json(data);
      });
}


