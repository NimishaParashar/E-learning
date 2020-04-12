const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectModel = new Schema({
  subject_name: {
    type: String,
  },
  course: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Course",
  },
  subject_img: {
    type: String,
  },
});

const Subject = mongoose.model("Subject", subjectModel);
module.exports = {
  Subject,
};
