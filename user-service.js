'use strict';

const config = require('./config.js');
const dbTable = 'users';

var service = module.exports = {};

service.findAll = function () {
    return config.db.get(dbTable).find({});
};

service.getByUsername = function (username) {
    return config.db.get(dbTable).findOne({username : username});
};

service.deleteByUsername = function (username) {
    return config.db.get(dbTable).remove({username : username});
};

service.updateByUsername = function (username, data) {
    return config.db.get(dbTable).update({username : username}, data);
};

service.create = function (data) {
    return config.db.get(dbTable).insert(data);
};
