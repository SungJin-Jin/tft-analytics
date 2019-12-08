require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const moongoose = require('mongoose');

moongoose.Promise = global.Promise;
moongoose.connect(process.env.MONGO_URI, {
    useMongoClient: true
}).then(() => {
    console.log('Successfully connected to mongodb');
}).catch((e) => {
    console.error(e);
});

const port = process.env.PORT || 4000;

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening to port', port);
});