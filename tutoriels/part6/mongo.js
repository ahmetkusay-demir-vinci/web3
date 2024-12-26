import mongoose from "mongoose";
import Note from "./notes.js";

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://kusay:${password}@cluster0.kprn2.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

/*
// Connexion à la base de données
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Création d'une nouvelle note
    const note = new Note({
      content: "Kusay est trop bg",
      date: new Date(),
      important: true,
    });

    return note.save(); // Sauvegarder la note dans la base de données
  })
  .then((result) => {
    console.log("Note saved :", result);
    return mongoose.connection.close(); // Fermer la connexion
  })
  .catch((err) => console.log(err));
*/



mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Récupérer toutes les notes
    return Note.find({});
  })
  .then((result) => {
    result.forEach((note) => {
      console.log(note); // Afficher chaque note
    });
    return mongoose.connection.close(); // Fermer la connexion
  })
  .catch((err) => console.log(err));
