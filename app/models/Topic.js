const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic_name: {
    type: String,
  },
  subject: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Subject",
  },
  content: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Content",
  },
  topic_img: {
    type: String,
  },
});

const Topic = mongoose.model("Topic", topicSchema);
module.exports = {
  Topic,
};
