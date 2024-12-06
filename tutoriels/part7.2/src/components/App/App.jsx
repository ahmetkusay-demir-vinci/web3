import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "components/Header/Header";
import NavBar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

const defaultPizzas = [
  {
    id: 1,
    title: "4 fromages",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Alpage",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Diable",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

const drinks = [
  {
    title: "Coca-Cola",
    image:
      "https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8=",
    volume: "Volume: 33cl",
    price: "2,50 €",
  },
  {
    title: "Pepsi",
    image:
      "https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg=",
    volume: "Volume: 33cl",
    price: "2,50 €",
  },
  {
    title: "Eau Minérale",
    image:
      "https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk=",
    volume: "Volume: 50cl",
    price: "1,50 €",
  },
];

const App = () => {
  const [actionToBePerformed, setActionToBePerformed] = useState(false); // un état booléen pour déclencher une action initialisé à false
  const [pizzas, setPizzas] = useState(defaultPizzas); // un état initialisé contenant la liste des pizzas initialisé à defaultPizzas

  const addPizza = (newPizza) => { // une fonction pour ajouter une pizza en mettant à jour l'état des "pizzas"
    const pizzaAdded = { ...newPizza, id: nextPizzaId(pizzas) }; // on crée une nouvelle pizza avec un id incrémenté unique
    setPizzas([...pizzas, pizzaAdded]); // on met à jour l'état des pizzas en ajoutant la nouvelle pizza
  };

  const handleHeaderClick = () => {
    setActionToBePerformed(true); // déclenche l'action actionToBePerformed
  };

  const clearActionToBePerformed = () => {
    setActionToBePerformed(false); // remet l'action actionToBePerformed à false
  };

  // TODO : objet qui permet de passer les fonctions et les états aux composants enfants via le Outlet
  const fullPizzaContext = {
    addPizza, //fonction
    pizzas, //état
    setPizzas, //fonction
    actionToBePerformed, //état
    setActionToBePerformed, //fonction
    clearActionToBePerformed, //fonction
    drinks, //données
  };

  return (
    <div className="page">
      <Header
        title="We love Pizza"
        version={0 + 1}
        handleHeaderClick={handleHeaderClick}
      />
      <main>
        <NavBar />
        <Outlet context={fullPizzaContext}/>
      </main>
      <Footer />
    </div>
  );
};

const nextPizzaId = (pizzas) => {
  const ids = pizzas.map((pizza) => pizza.id);
  return Math.max(...ids) + 1;
};

export default App;
