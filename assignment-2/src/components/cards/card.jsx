import React, { useState } from "react";
import "../style.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const Card = ({ r, watchlist, addToWatchlist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ishovered2, setishovered2] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [isliked1, setisliked1] = useState(false);
  const [isliked2, setisliked2] = useState(false);
  const isliked = watchlist.some((movie) => movie.id === r.id);
  const handleAddToWatchlist = () => {
    addToWatchlist(r);

  };
  const handledisliked = () => {
    setdisliked(!disliked);
    setisliked1(false);
    setisliked2(false);
  };
  const handleisliked1 = () => {
    setdisliked(false);
    setisliked1(!isliked1);
    setisliked2(false);
  };
  const handleisliked2 = () => {
    setdisliked(false);
    setisliked1(false);
    setisliked2(!isliked2);
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
          <button
            className="card_like"
            onMouseEnter={() => setishovered2(true)}
            onMouseLeave={() => setishovered2(false)}
          >
            <ThumbUpOffAltOutlinedIcon />
            {ishovered2 ? (
              <div className="card_like__moreoptions">
                {disliked ? (
                  <ThumbDownAltIcon onClick={handledisliked} />
                ) : (
                  <ThumbDownOffAltIcon onClick={handledisliked} />
                )}
                {isliked1 ? (
                  <ThumbUpIcon onClick={handleisliked1} />
                ) : (
                  <ThumbUpOffAltOutlinedIcon onClick={handleisliked1} />
                )}
                {isliked2 ? (
                  <FavoriteIcon onClick={handleisliked2} />
                ) : (
                  <FavoriteBorderIcon onClick={handleisliked2} />
                )}
              </div>
            ) : null}
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
