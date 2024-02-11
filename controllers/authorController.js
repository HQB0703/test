const {Author, Book} = require("../model/model");

const authorController = {
    addAuthor: async (req, res) => {
        try {
            const {name, year} = req.body;
            const author = new Author({name, year});
            await author.save();
            res.status(201).json(author);
        } catch (error) {
            res.status(500).json({message: error.message}); ///500 server error
        }
    },

    getAllAuthors: async (req, res) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },
};

module.exports = authorController;