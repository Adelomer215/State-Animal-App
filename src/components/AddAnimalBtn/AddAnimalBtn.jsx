import { useState } from "react";
import PropTypes from "prop-types";
import "./AddAnimal.css";

const AddAnimalBtn = ({ getRandomAnimal, AddAnimal }) => {
  const [animalNum, setAnimalNum] = useState(0);

  const handleAnimalNum = () => {
    setAnimalNum((prev) => prev + 1);
    getRandomAnimal();
    AddAnimal();
  };
  return (
    <section className="AddAnimalBtn">
      <div className="container AddAnimalBtn--container">
        <button onClick={handleAnimalNum}>add animal</button>
        <p>
          animals to show:
          <span style={{ color: animalNum > 0 ? "green" : "red" }}>
            &nbsp;{animalNum}
          </span>
        </p>
      </div>
    </section>
  );
};

AddAnimalBtn.propTypes = {
  getRandomAnimal: PropTypes.func,
  AddAnimal: PropTypes.func,
};
export default AddAnimalBtn;
