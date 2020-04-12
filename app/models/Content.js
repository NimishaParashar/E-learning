const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  content_text: {
    type: String,
    required: true
  }
});

const Content = mongoose.model("Content", contentSchema);
module.exports = {
  Content
};
