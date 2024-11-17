import express from 'express';
import Person from '../models/person.js';
import NotFoundError from '../utils/NotFoundError.js';

const router = express.Router();

// GET all persons
router.get('/', (req, res, next) => {
  Person.find({})
    .then(persons => res.json(persons))
    .catch(err => next(err));
});

// POST a new person
router.post('/', (req, res, next) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({ error: 'Name or number missing' });
  }

  const person = new Person({ name, number });

  person.save()
    .then(savedPerson => res.status(201).json(savedPerson))
    .catch(err => next(err));
});

// DELETE a person by ID
router.delete('/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      if (result) {
        res.status(204).end();
      } else {
        throw new NotFoundError();
      }
    })
    .catch(err => next(err));
});

// PUT - Update a person's phone number
router.put('/:id', (req, res, next) => {
  const { number } = req.body;

  if (!number) {
    return res.status(400).json({ error: 'Number missing' });
  }

  Person.findByIdAndUpdate(
    req.params.id,
    { number },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson);
      } else {
        throw new NotFoundError();
      }
    })
    .catch(err => next(err));
});

export default router;
