'use strict';

const config = require('./config.js');
const dbTable = 'users';

var controller = module.exports = {};

controller.findAll = function *() {
    this.body = yield config.db.get(dbTable).find({});
};

controller.getByUsername = function *(username) {
    this.body = yield config.db.get(dbTable).findOne({username : username});
};

controller.deleteByUsername = function *(username) {
    var result = yield config.db.get(dbTable).remove({username : username});
    this.body = { result : result > 0 };
};

controller.updateByUsername = function *(username) {
    var data = yield config.parser(this);
    var result = yield config.db.get(dbTable).update({username : username}, data);
    this.body = { result : result === 1 };
};

controller.create = function *() {
    var data = yield config.parser(this);
    this.body = yield config.db.get(dbTable).insert(data);
};
