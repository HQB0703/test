const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.post("/sigup", UserController.sigup);
router.post("/sigin", UserController.sigin);

module.exports = router;