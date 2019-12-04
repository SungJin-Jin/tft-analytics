const Router = require('koa-router');

const rankCtrl = require('./rank.ctrl');

const rank = new Router();

rank.get('/', rankCtrl.list);

module.exports = rank;