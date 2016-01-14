'use strict';

var config = module.exports = {};

config.router = require('koa-route');
config.jwt = require('koa-jwt');
config.parser = require('co-body');
config.db = require('monk')('localhost/koa-api');
config.objectId = require('mongodb').ObjectID;
config.fs = require('fs');

config.publicKey = config.fs.readFileSync('certs/public.rsa');
config.privateKey = config.fs.readFileSync('certs/private.rsa');
