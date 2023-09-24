import PropTypes from "prop-types";

import "./AnimalsShow.css";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import heart from "../svg/heart.svg";
import horse from "../svg/horse.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

const AnimalsShow = ({ animal }) => {
  const [love, setLove] = useState(0);
  const handleLove = () => setLove(love + 1);
  return (
    <div className="animalCard" onClick={handleLove}>
      <div className="animalCard--img">
        <img src={svgMap[animal]} alt={svgMap[animal]} />
      </div>
      <div className="animalCard--info">
        <h2>{animal}</h2>
        <div className="heart">
          <img
            src={svgMap.heart}
            alt={svgMap.heart}
            style={{
              width: 2 + love + "rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

AnimalsShow.propTypes = {
  animal: PropTypes.string,
};

export default AnimalsShow;
