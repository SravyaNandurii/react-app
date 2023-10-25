import React, { useState ,useEffect, useContext} from "react";
import "../../components/style.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { UserContext } from "../../App";
import Mylist from "../Watch_list/Watch_list";
const Card = ({  r, ind, setall, item, watchlist, addToWatchlist}) => {
      // console.log(r);
      // console.log(all1);
      console.log(item,"itemmmm")
      const setMovies=useContext(UserContext)
      console.log(setMovies,"nahhhhhhhhhhh")
      console.log("Map2 - addToWatchlist:", addToWatchlist);
      const [isHovered, setIsHovered] = useState(false);
      const [isAdded, setisAdded] = useState(false);
      console.log(r);
      useEffect(() => {
        const addedMovies = JSON.parse(localStorage.getItem("addedMovies")) || [];
        setisAdded(addedMovies.includes(r.id));
      }, [r.id]);
      const handleAddToWatchlist = () => {
        addToWatchlist(r);
        const addedMovies = JSON.parse(localStorage.getItem("addedMovies")) || [];
        setisAdded((prevIsAdded) => {
          const updatedMovies = prevIsAdded
            ? addedMovies.filter((id) => id !== r.id)
            : [...addedMovies, r.id];
          localStorage.setItem("addedMovies", JSON.stringify(updatedMovies));
          return !prevIsAdded;
        });

      };
      // const handleAddToWatchlist=({item,setMovies})=>{
      //   setisAdded(!isAdded)
      //   item.isliked=!isAdded
      //   setMovies(item.isliked)
      // }
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
              {isAdded ? (
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
