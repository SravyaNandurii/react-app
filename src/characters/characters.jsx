import React from "react";
import Header from "../components/header/header";
import "./character.css";
import Cards from "../components/cards/cards";
import "../characters/character.css";
import Map from "../components/cards/Mapforcards";
const Characterspage = () => {
  return (
    <div>
      <div className="characters_header">
        <Header />
      </div>
      {/* <p>Continue Watching</p> */}
      <div className="class2">
        <Cards />
      </div>
    </div>
  );
};

export default Characterspage;
