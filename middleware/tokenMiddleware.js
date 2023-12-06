//fonctionne comme un controleur, mais pour les tokens
//autorization dans postman : bearer + token
//fonctionne entre la requete et la reception de la requete
const jwt = require('jsonwebtoken')

exports.verifToken = function (req, res, next) {
    const token = req.headers.authorization.split(" ")[1]

    try {
      jwt.verify(token, process.env.TOKEN_SECRET, (user,err) => {req.user = user}); //on verifie le token
      next(); //si le token est bon, on fait suivre
    }
    catch (err) {
      res.status(401).json({ message: "Token invalide" });
    }
}
