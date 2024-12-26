import mongoose from "mongoose";
import Person from "./models/people.js";

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://kusay:${password}@cluster0.kprn2.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Vérifie si des noms ont été fournis
    if (process.argv.length === 3) {
      // Aucune entrée fournie, affichons toutes les entrées du répertoire
      return Person.find({});
    } else if (process.argv.length === 5) {
      // Ajout d'une nouvelle entrée
      const name = process.argv[3];
      const number = process.argv[4];
      const person = new Person({
        name: name,
        number: number,
      });

      return person.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`);
      });
    } else {
      console.log(
        "Please provide a name and a number: node mongo.js <password> <name> <number>"
      );
      process.exit(1);
    }
  })
  .then((result) => {
    if (result) {
      console.log("phonebook:");
      result.forEach((person) => {
        console.log(person.name, person.number);
      });
    }
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
