import React, { useState } from "react";
import "../../components/style.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Mylist from "../Watch_list/Watch_list";
const Card = ({ r, ind, setall, all1 }) => {
      console.log(r);
      console.log(all1);
      const [isHovered, setIsHovered] = useState(false);
      const [isadded, setisadded] = useState(false);
      console.log(r);
      const handlelike = () => {
        setisadded(!isadded);
        const newdata = [...all1];
        newdata[ind].isliked = !newdata[ind].isliked;
        // r.isliked = !r.isliked;
        setall(newdata);
        // console.log(r.isliked)
      };
      console.log("final", r);
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
              <button className="card_addlist" onClick={handlelike}>
                {isadded ? (
                  <ControlPointOutlinedIcon />
                ) : (
                  <CheckCircleOutlineIcon />
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
