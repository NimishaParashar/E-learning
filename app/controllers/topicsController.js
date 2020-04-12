const { Topic } = require("../models/Topic");
let imgPort = "http://localhost:3040";

module.exports.show = (req, res) => {
  const id = req.params.id;
  Topic.findById(id)
    .then(function (topic) {
      if (topic) {
        res.json(topic);
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
  // const topic = new Topic(body);

  // const course = new Course({
  //   course_name: body.course_name,
  //   course_img: imgPort + "/uploads/" + req.file.filename,
  // });

  // "topic_name": "Intro to javascript",
  // "subject": "5e7c93417939fa24f0f65b0f",
  // "content": "5e7cbec289e3142218f8f7ad",
  const topic = new Topic({
    topic_name: body.topic_name,
    subject: body.subject,
    content: body.content,
    topic_img: imgPort + "/uploads/" + req.file.filename,
  });
  topic
    .save()
    .then(function (topic) {
      res.json(topic);
    })
    .catch(function (err) {
      res.json(err);
    });
};
module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Topic.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(function (topic) {
      res.json(topic);
    })
    .catch(function (err) {
      res.json(err);
    });
};
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Topic.findByIdAndDelete(id)
    .then(function (topic) {
      if (topic) {
        res.json(topic);
      } else {
        res.json({});
      }
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.list = (req, res) => {
  Topic.find()
    .then(function (topic) {
      res.json(topic);
    })
    .catch(function (err) {
      res.json(err);
    });
};

module.exports.updateImg = (req, res) => {
  const id = req.params.id;

  Topic.findByIdAndUpdate(
    id,
    { topic_img: imgPort + "/uploads/" + req.file.filename },
    { new: true, runValidators: true }
  )
    .then((topic) => {
      res.json(topic);
    })
    .catch((err) => {
      res.json(err);
    });
};
