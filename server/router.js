const Router = require("koa-router");
const router = new Router();
const topic = require("./controllers/topic");

router
  .get("/topics", topic.getAll)
  .post("/topic", topic.setTopic)
  .delete("/topic/:id", topic.deleteTopic);

module.exports = router;
