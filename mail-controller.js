'use strict';

const config = require('./config.js');
const mailService = require('./mail-service.js');

var controller = module.exports = {};

controller.inbox = function *(id) {
    this.body = yield mailService.getReceivedFromUserId(id);
};

controller.outbox = function *(id) {
    this.body = yield mailService.getSentFromUserId(id);
};

controller.send = function *(data) {
    var result = yield mailService.send(data);
    console.log(result);
    this.body = { result : result > 0 };
};

controller.get = function *(id) {
    this.body = yield mailService.getById(id);
};
