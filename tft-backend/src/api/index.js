const Router = require('koa-router');

const rank = require('./rank');
const analytics = require('./analytics');

const api = new Router();

api.use('/rank', rank.routes())
    .use('/analytics', analytics.routes());

module.exports = api;