'use strict';

const config = require('./config.js');
const authService = require('./auth-service.js');
const userService = require('./user-service.js');

var controller = module.exports = {};

controller.checkCredentials = function *() {
    try {
        var data = yield config.parser(this);
        if(!data.username || !data.password)
            throw new Error('Empty fields');

        var user = yield userService.getByUsername(data.username);
        if(!user)
            throw new Error('Invalid username');

        if(authService.passwordMatchesHash(data.password, user.password)) {
            console.log('User logged in');
            this.body = {
                loggedIn : true,
                token : authService.generateToken(data.username, data.password),
                user : user
            };
        }
        else {
            this.status = 401;
            this.body = "Incorrect password";
        }
    }
    catch(e) {
        this.status = e.status || 500;
        this.body = e.message;
    }
};
