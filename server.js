'use strict';

var koa = require('koa');
var cors = require('kcors');
var config = require('./config.js');
var authController = require('./auth-controller.js');
var userController = require('./user-controller.js');
var mailController = require('./mail-controller.js');
var consoleLog = require('./console-log-service.js');

var app = koa();
app.use(cors());
app.use(consoleLog());

app.use(config.router.post('/auth', authController.checkCredentials));
app.use(config.router.post('/users', userController.create));

app.use(config.jwt({ secret: config.publicKey, algorithm: 'RS256' }));

app.use(config.router.get('/users', userController.findAll));
app.use(config.router.get('/users/:username', userController.getByUsername));
app.use(config.router.delete('/users/:username', userController.deleteByUsername));
app.use(config.router.put('/users/:username', userController.updateByUsername));
app.use(config.router.get('/inbox/:id', mailController.inbox));
app.use(config.router.get('/outbox/:id', mailController.outbox));
app.use(config.router.post('/mail/send', mailController.send));

app.listen(3000);
console.log('Listening on 3000, yo!');
