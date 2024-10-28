import mongoose from "mongoose";

// Définir le schéma pour une personne
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

// Créer le modèle basé sur le schéma
const Person = mongoose.model("Person", personSchema);

export default Person;
