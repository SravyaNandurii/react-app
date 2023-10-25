import React from "react";
import "../../components/style.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Playbutton=(()=>{
    return (
        <div className="Playbutton">
        <button className="Playbutton_play">
            <PlayArrowIcon />
            <span>Play</span>
        </button>
        <button className="Playbutton_moreinfo">
            <InfoOutlinedIcon />
            <span>Info</span>
        </button>
        </div>
    )
})
export default Playbutton;