import React, { useState,useContext } from "react";
import Map from "./Mapforcards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Usercontext } from "../../App";
const Cards = ({ movies, setAllMovies, watchlist, addToWatchlist }) => {
  const [startIndex, setStartIndex] = useState(0);
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 6));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(movies.length - 6, prevIndex + 6));
  };

  return (
    <div className="carousel-container">
      <ArrowBackIosIcon className="sliderArrow left" onClick={handlePrev} />
      <ArrowForwardIosIcon className="sliderArrow right" onClick={handleNext} />
      <Map
        y={movies.slice(startIndex, startIndex + 6)}
        setAllMovies={setAllMovies}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
      />
    </div>
  );
};

export default Cards;
