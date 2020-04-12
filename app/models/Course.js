const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  course_name: {
    type: String,
    required: true
  },
  course_img: {
    type: String
  }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = {
  Course
};
