const topic = require("./../models/topic");

exports.getAll = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = await topic.getAll();
};

exports.setTopic = async (ctx, next) => {
  // asign it to the body of the response to use it in the frontend
  ctx.body = await topic.setTopic(ctx.request.body);
  ctx.status = 201;
};

exports.deleteTopic = async (ctx, next) => {
  await topic.delete(ctx.params.id);
};
