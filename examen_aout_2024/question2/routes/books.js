const router = require('express').Router();
const Book = require('../models/book');

// GET all books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// POST a comment to a book
router.post('/:id/comments', async (req, res, next) => {
  const { id } = req.params;
  const { username, comment } = req.body;

  if (comment.length <= 5) {
    return res.status(400).json({ error: 'Comment must be more than 5 characters' });
  }

  if (username.length <= 3) {
    return res.status(400).json({ error: 'Username must be more than 3 characters' });
  }

  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    const existingComment = book.comments.find(c => c.username === username);
    if (existingComment) {
      return res.status(400).json({ error: 'User has already commented on this book' });
    }

    const newComment = { username, comment };
    book.comments.push(newComment);
    await book.save();

    res.status(201).json({
      id: book.id,
      username: newComment.username,
      comment: newComment.comment,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;