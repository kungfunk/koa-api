'use strict';

var koa = require('koa');
var config = require('./config.js');
var userController = require('./user-controller.js');

var app = koa();

app.use(config.router.get('/users', userController.findAll));
app.use(config.router.post('/users', userController.create));
app.use(config.router.get('/users/:username', userController.getByUsername));
app.use(config.router.delete('/users/:username', userController.deleteByUsername));
app.use(config.router.put('/users/:username', userController.updateByUsername));

app.listen(3000);
console.log('Listening on 3000, yo!');
