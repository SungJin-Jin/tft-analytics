require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to mongodb');
}).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000;

router.use('/api', api.routes());

app.use(cors())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(bodyParser());

app.listen(port, () => {
    console.log('listening to port', port);
});