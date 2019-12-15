const Router = require('koa-router');

const analyticsCtrl = require('./analytics.ctrl');

const analytics = new Router();

analytics.post('/', analyticsCtrl.save);

module.exports = analytics;