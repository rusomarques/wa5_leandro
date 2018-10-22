const Router = require('koa-router');
const router = new Router();
const topic = require('./controllers/topic');

router
  .get('/topics', topic.getAll);

module.exports = router;