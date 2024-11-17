import express from 'express';
import Note from '../models/notes.js';
import NotFoundError from '../utils/NotFoundError.js';

const router = express.Router();

// GET all notes
router.get('/', (req, res, next) => {
  Note.find({})
    .then(notes => res.json(notes))
    .catch(err => next(err));
});
 
// GET a single note by ID
router.get('/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => {
      if (note) {
        res.json(note);
      } else {
        throw new NotFoundError();
      }
    })
    .catch(err => next(err));
});

// POST a new note
router.post('/', (req, res, next) => {
  const { content, important = false } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'content missing' });
  }

  const note = new Note({
    content,
    important,
    date: new Date(),
  });

  note.save()
    .then(savedNote => res.json(savedNote))
    .catch(err => next(err));
});

// DELETE a note by ID
router.delete('/:id', (req, res, next) => {
  Note.findByIdAndDelete(req.params.id)
    .then(result => {
      if (result) {
        res.status(204).end();
      } else {
        throw new NotFoundError();
      }
    })
    .catch(err => next(err));
});

export default router;
