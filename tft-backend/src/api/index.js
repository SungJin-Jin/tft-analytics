const Router = require('koa-router');

const rank = require('./rank');

const api = new Router();

api.use('/rank', rank.routes());

module.exports = api;