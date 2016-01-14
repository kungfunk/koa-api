'use strict';

const config = require('./config.js');
const dbTable = 'mail';

var service = module.exports = {};

service.getReceivedFromUserId = function (id) {
    return config.db.get(dbTable).find({ to_user_id : new config.objectId(id) });
};

service.getSentFromUserId = function (id) {
    return config.db.get(dbTable).find({ from_user_id : new config.objectId(id) });
};

service.getById = function (id) {
    return config.db.get(dbTable).find({ _id : new config.objectId(id) });
};

service.send = function (data) {
    return config.db.get(dbTable).insert(data);
};
