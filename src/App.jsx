import { useState } from "react";
import AddAnimalBtn from "./components/AddAnimalBtn/AddAnimalBtn";
import Animals from "./components/Animals/AnimalsShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.trunc(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const AddAnimal = () => {
    setAnimals((prev) => [...prev, getRandomAnimal()]);
  };
  const renderdAnimals = animals.map((animal, idx) => {
    return <Animals animal={animal} key={idx} />;
  });
  return (
    <>
      <div className="container">
        {!animals.length ? (
          <h1
            style={{
              color: "red",
              fontSize: "5rem",
              textAlign: "center",
            }}
          >
            Clilck The Botton To Add An Animal.
          </h1>
        ) : (
          <div className=" ainmals">{renderdAnimals}</div>
        )}
      </div>

      <AddAnimalBtn getRandomAnimal={getRandomAnimal} AddAnimal={AddAnimal} />
    </>
  );
}

export default App;
