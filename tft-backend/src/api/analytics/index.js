const Router = require('koa-router');

const analyticsCtrl = require('./analytics.ctrl');

const analytics = new Router();

analytics.get('/', analyticsCtrl.process);

module.exports = analytics;