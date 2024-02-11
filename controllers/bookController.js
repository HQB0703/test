const {Author, Book} = require("../model/model");

const bookController = {
    addBook: async (req, res) => {
        try {
            const {name, date, genres, author} = req.body;
            const book = new Book({name, date, genres, author});
            const savebook = await book.save();
            if (req.body.author) {
               const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: savebook._id}});
            }
            res.status(201).json(savebook);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = bookController;