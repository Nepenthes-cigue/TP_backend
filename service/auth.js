const jwt = require('jsonwebtoken');
const debug = require('debug')('backend:services:auth');
require('dotenv').config()

exports.generateAccessToken = (user) => {
    let userici = {email: user.email, name: user.name, _id: user._id}
    debug('generating access token : ', userici);
    return jwt.sign(userici, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });
  }


exports.generateRefreshToken = (user) => {
    debug('generating refresh token : ', user.email);
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
  }
