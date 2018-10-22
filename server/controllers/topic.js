const topic = require('./../models/topic');

exports.getAll = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = await topic.getAll();
};

exports.setTopic = async (ctx, next) => {
  await topic.setTopic(ctx.request.body);
  ctx.status = 201;
};
