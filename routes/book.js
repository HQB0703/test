const bookController = require("../controllers/bookController");

const router = require('express').Router();

router.post("/", bookController.addBook);

router.get("/", bookController.getAllBooks);

module.exports = router;