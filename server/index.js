const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');
const router = require('./router');
const cors = require('koa-cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/code_democracy');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error')); // eslint-disable-line no-console
db.once('open', () => console.log('connected to mongodb')); // eslint-disable-line no-console


app
.use(bodyParser())
.use(cors())
.use(router.routes());

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
  
});

