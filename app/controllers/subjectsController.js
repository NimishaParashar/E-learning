const { Subject } = require("../models/Subject");
let imgPort = "http://localhost:3040";
module.exports.show = (req, res) => {
  const id = req.params.id;
  Subject.findById(id)
    .then(function (subject) {
      if (subject) {
        res.json(subject);
      } else {
        res.json({});
      }
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  // const subject = new Subject(body);
  console.log(req.file);
  const subject = new Subject({
    subject_name: body.subject_name,
    course: body.course,
    subject_img: imgPort + "/uploads/" + req.file.filename,
  });

  subject
    .save()
    .then(function (subject) {
      res.json(subject);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.list = (req, res) => {
  Subject.find()
    .then(function (subject) {
      res.json(subject);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Subject.findByIdAndDelete(id)
    .then(function (subject) {
      if (subject) {
        res.json(subject);
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
  Subject.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(function (subject) {
      res.json(subject);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.updateImg = (req, res) => {
  const id = req.params.id;

  Subject.findByIdAndUpdate(
    id,
    { subject_img: imgPort + "/uploads/" + req.file.filename },
    { new: true, runValidators: true }
  )
    .then((subject) => {
      res.json(subject);
    })
    .catch((err) => {
      res.json(err);
    });
};
