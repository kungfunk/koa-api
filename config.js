'use strict';

var config = module.exports = {};

config.router = require('koa-route');
config.jwt = require('koa-jwt');
config.parser = require('co-body');
config.db = require('monk')('localhost/koa-api');
