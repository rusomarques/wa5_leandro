const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./../data.json');

const TopicSchema = new Schema ({
  // _id: String,
  title: String,
  published_at: String,
  score: Number
});

const TopicModel = mongoose.model('Topic', TopicSchema);

(async function () {
  await TopicModel.deleteMany();
  data.forEach(async (topic) => {
    await TopicModel.create(topic);
  });
})();


exports.getAll = () => TopicModel.find().sort({score: 'desc'});

exports.setTopic = (topic) => {
  TopicModel.create(topic);
}

exports.deleteTopic = (topicTitle) => {
  TopicModel.deleteOne({ title: topicTitle });
}