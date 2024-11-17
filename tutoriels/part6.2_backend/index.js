import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRouter from './routes/notes.js'
import { errorHandler, disableCors } from './utils/middlewares.js';
import { MONGODB_URI, PORT } from './utils/config.js';

// Connect to database
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

// Create and init server
const app = express();

app.use(express.json());
app.use(disableCors);
app.use('/api/notes', notesRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
