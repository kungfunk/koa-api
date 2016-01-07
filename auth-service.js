'use strict';

const config = require('./config.js');
const bcrypt = require('bcrypt');

var service = module.exports = {};

service.generateToken = function(username, password) {
    return config.jwt.sign({ username : username, password : password }, config.privateKey, {algorithm: 'RS256'});
};

service.hashPassword = function(password) {
    return bcrypt.hashSync(password, 10);
};

service.passwordMatchesHash = function(password, hash) {
    return bcrypt.compareSync(password, hash);
}
