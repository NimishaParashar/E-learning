const { Course } = require("../models/Course");
let imgPort = "http://localhost:3040";

module.exports.list = (req, res) => {
  Course.find()
    .then(function (course) {
      res.json(course);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  console.log(req.file);
  // const course = new Course(body);

  const course = new Course({
    course_name: body.course_name,
    course_img: imgPort + "/uploads/" + req.file.filename,
  });
  course
    .save()
    .then(function (course) {
      res.json(course);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Course.findById(id)
    .then(function (course) {
      if (course) {
        res.json(course);
      } else {
        res.json({});
      }
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Course.findByIdAndDelete(id)
    .then(function (course) {
      if (course) {
        res.json(course);
      } else {
        res.json({});
      }
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Course.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(function (course) {
      res.json(course);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.updateImg = (req, res) => {
  const id = req.params.id;

  Course.findByIdAndUpdate(
    id,
    { course_img: imgPort + "/uploads/" + req.file.filename },
    { new: true, runValidators: true }
  )
    .then((course) => {
      res.json(course);
    })
    .catch((err) => {
      res.json(err);
    });
};
