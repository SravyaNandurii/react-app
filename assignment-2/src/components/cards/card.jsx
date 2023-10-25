import React, { useState } from "react";
import "../style.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Card = ({ r, watchlist, addToWatchlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isliked = watchlist.some((movie) => movie.id === r.id);
  const handleAddToWatchlist = () => {
    addToWatchlist(r);
  };

  return (
    <div
      className={`card-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="indcard">
        <img src={r.poster} alt="nooo" className="movie_img" />
      </div>
      {isHovered ? (
        <div className="hover-content">
          <button className="card_playbutton">
            <PlayArrowIcon />
          </button>
          <button className="card_addlist" onClick={handleAddToWatchlist}>
            {isliked ? (
              <CheckCircleOutlineIcon />
            ) : (
              <ControlPointOutlinedIcon />
            )}
          </button>
          <button className="card_like">
            <ThumbUpOffAltOutlinedIcon />
          </button>
          <button className="card_dropdown">
            <KeyboardArrowDownOutlinedIcon />
          </button>

          <p className="card_Match">{r.match}</p>
          <ul className="unordered">
            <li className="card_duration">{r.duration}</li>
            <li className="card_UA">{r.rating}</li>
            <li className="card_UA">{r.resolution}</li>
            <li className="rating">U</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
