import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import personsRouter from './routes/persons.js';
import { MONGODB_URI, PORT } from './utils/config.js';
import { errorHandler, disableCors } from './utils/middlewares.js';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));

// Initialize Express app
const app = express();

app.use(express.json());
app.use(cors()); // cors permet les requêtes cross-origin c'est à dire les requêtes provenant d'un autre domaine que celui du serveur
app.use(disableCors);

app.use('/api/persons', personsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
