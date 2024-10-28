import mongoose from 'mongoose';

// Définir le schéma pour une note
const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
});

// Créer le modèle basé sur le schéma
const Note = mongoose.model('Note', noteSchema);

export default Note;
