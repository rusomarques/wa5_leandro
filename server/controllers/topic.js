const topic = require('./../models/topic');

exports.getAll = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = await topic.getAll();
};