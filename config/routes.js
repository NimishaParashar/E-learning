const express = require("express");
const router = express.Router();
const usersController = require("../app/controllers/usersControllers");
const coursesController = require("../app/controllers/coursesController");
const subjectsController = require("../app/controllers/subjectsController");
const topicsController = require("../app/controllers/topicsController");
const contentsController = require("../app/controllers/contentsController");
const { authenticateUser } = require("../app/middlewares/authentication");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    switch (file.mimetype) {
      case "image/jpeg":
        ext = ".jpeg";
        break;
      case "image/jpg":
        ext = ".jpg";
        break;
      case "image/png":
        ext = ".png";
        break;
    }
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const upload = multer({ storage: storage }).single("image");
//http://localhost:3040/uploads/image-1586073619774.png"
//user-auth
router.post("/users/register", usersController.create);
router.post("/users/login", usersController.createToken);
router.delete("/users/logout", authenticateUser, usersController.destroy);
router.get("/users/account", authenticateUser, usersController.show);

router.get("/courses", coursesController.list);
router.post("/courses", upload, coursesController.create);
router.delete("/courses/:id", coursesController.destroy);
router.get("/courses/:id", coursesController.show);
router.put("/courses/img/:id", upload, coursesController.updateImg);
router.put("/courses/:id", coursesController.update);

router.get("/subjects", subjectsController.list);
router.get("/subjects/:id", subjectsController.show);
router.post("/subjects", upload, subjectsController.create);
router.delete("/subjects/:id", subjectsController.destroy);
router.put("/subjects/img/:id", upload, subjectsController.updateImg);
router.put("/subjects/:id", subjectsController.update);

router.get("/topics", topicsController.list);
router.post("/topics", upload, topicsController.create);
router.get("/topics/:id", topicsController.show);
router.delete("/topics/:id", topicsController.destroy);
router.put("/topics/:id", topicsController.update);
router.put("/topics/img/:id", upload, topicsController.updateImg);

router.get("/content", contentsController.list);
router.put("/content/:id", contentsController.update);
router.post("/content", contentsController.create);
router.delete("/content/:id", contentsController.destroy);
router.get("/content/:id", contentsController.show);
module.exports = router;
