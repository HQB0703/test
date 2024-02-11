const authorController = require('../controllers/authorController');

const router = require('express').Router();

//Add the Author Model
router.post("/", authorController.addAuthor);

//Get all Authors
router.get("/", authorController.getAllAuthors);

module.exports = router;