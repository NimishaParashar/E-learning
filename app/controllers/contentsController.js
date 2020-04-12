const { Content } = require("../models/Content");

module.exports.create = (req, res) => {
  const body = req.body;
  const content = new Content(body);
  content
    .save()
    .then(function(content) {
      res.json(content);
    })
    .catch(function(err) {
      res.json(err);
    });
};
module.exports.show = (req, res) => {
  const id = req.params.id;
  Content.findById(id)
    .then(function(content) {
      if (content) {
        res.json(content);
      } else {
        res.json({});
      }
    })
    .catch(function(err) {
      res.json(err);
    });
};
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Content.findByIdAndDelete(id)
    .then(function(content) {
      if (content) {
        res.json(content);
      } else {
        res.json({});
      }
    })
    .catch(function(err) {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Content.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then(function(content) {
      res.json(content);
    })
    .catch(function(err) {
      res.json(err);
    });
};
module.exports.list = (req, res) => {
  Content.find()
    .then(function(content) {
      res.json(content);
    })
    .catch(function(err) {
      res.json(err);
    });
};
