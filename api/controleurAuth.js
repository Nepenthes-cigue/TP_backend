const jwt = require('jsonwebtoken')
const Services = require('../service/auth')
const UserServices = require('../service/services')
require('dotenv').config()

exports.login = async (req, res) => {
    // TODO: fetch le user depuis la db basé sur l'email passé en paramètre
  var user = await UserServices.getUser(req.body?.email);
  if (user == undefined) {
      return res.status(401).send('invalid credentials');
  }

  // TODO: check que le mot de passe du user est correct
  if (!UserServices.authenticate(req.body.password,user) ) {
      return res.status(401).send('invalid credentials');
  }
  const accessToken = Services.generateAccessToken(user);
  const refreshToken = Services.generateRefreshToken(user);
  return res.status(200).json({
    accessToken,
    refreshToken
  });

}


exports.refreshToken = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, async (err, userFromToken) => {
      if (err) {
        return res.sendStatus(401)
      }
  
      // TODO: Check en base que l'user est toujours existant/autorisé à utiliser la plateforme
      var user = await UserServices.getUser(userFromToken.email);
      if (user == undefined) {
        return res.status(401).send('invalid credentials');
      }
      
      const refreshedToken = Services.generateAccessToken(user);
      res.send({
        accessToken: refreshedToken,
      });
    });
}