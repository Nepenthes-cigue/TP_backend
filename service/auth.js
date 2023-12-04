const jwt = require('jsonwebtoken')

exports.generateAccessToken = function (user) {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1800s' }); //créer un acces token (pour eviter de se reconnecter a chaque fois)
}