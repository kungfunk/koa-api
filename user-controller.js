'use strict';

const config = require('./config.js');
const userService = require('./user-service.js');
const authService = require('./auth-service.js');

var controller = module.exports = {};

controller.findAll = function *() {
    this.body = yield userService.findAll();
};

controller.getByUsername = function *(username) {
    this.body = yield userService.getByUsername(username);
};

controller.deleteByUsername = function *(username) {
    var result = yield userService.deleteByUsername(username);
    this.body = { result : result > 0 };
};

controller.updateByUsername = function *(username) {
    var data = yield config.parser(this);
    data.password = authService.hashPassword(data.password);
    var result = yield userService.updateByUsername(username, data);
    this.body = { result : result === 1 };
};

controller.create = function *() {
    var data = yield config.parser(this);
    data.password = authService.hashPassword(data.password);
    this.body = yield userService.create(data);
};
