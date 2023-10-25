import React, { useContext, useEffect, useState } from "react";
import "../Watch_list/Watch_list.css";
import "./Watch_list.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { UserContext } from "../../App";
import Card from "../cards/card";
function Mylist({ watchlist1, removeFromWatchlist }) {
  useEffect(() => {
    console.log("Watchlist updated:", watchlist1);
  }, [watchlist1]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setisAdded] = useState(false);
  useEffect(() => {
    const addedMovies = JSON.parse(localStorage.getItem("addedMovies")) || [];
    setisAdded(addedMovies.includes(watchlist1.map((movie) => movie.id)));
  }, [watchlist1]);

  console.log("remove", removeFromWatchlist);
  const handleRemoveClick = (movie) => {
    setisAdded(false);
    removeFromWatchlist(movie);
  };

  return (
    <div className="total">
      
      {watchlist1.map((movie) => (
        <div
          className={`card-container1`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div key={movie.id} className="full">
            <div className="indcard1">
              <img src={movie.poster} alt="nooo" className="movie_img1" />
            </div>
            {isHovered ? (
              <div className="hover-content1">
                <button className="card_playbutton1">
                  <PlayArrowIcon />
                </button>
                <button
                  className="card_addlist1"
                  onClick={() => handleRemoveClick(movie)}
                >
                  {isAdded ? (
                    <ControlPointOutlinedIcon />
                  ) : (
                    <CheckCircleOutlineIcon />
                  )}
                </button>

                <button className="card_like1">
                  <ThumbUpOffAltOutlinedIcon />
                </button>
                <button className="card_dropdown1">
                  <KeyboardArrowDownOutlinedIcon />
                </button>

                <p className="card_Match1">{movie.match}</p>
                <ul className="unordered1">
                  <li className="card_duration1">{movie.duration}</li>
                  <li className="card_UA1">{movie.rating}</li>
                  <li className="card_UA1">{movie.resolution}</li>
                  <li className="rating1">U</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
  // const movies=useContext(UserContext)
  // console.log(movies," sssssssssssssssss")
  // console.log(movies[0],"lalitha1")
  // return(
  //   <div>
      
  //         {
  //         movies[0].map((a)=>a.isliked && a!==undefined?
  //       <Card item={a} /> :null)}
  //   </div>
  // )

}
export default Mylist;
