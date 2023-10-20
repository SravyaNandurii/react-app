import React from 'react';
import kungfutext from '../Images/kungfutext.png'
import Playbutton from '../Playbutton/playbutton';
const MovieBanner = ({ imageUrl, onClickWatchNow }) => (
  <div className="movie-banner" >
    <img src={kungfutext} alt="no" className='movie-banner_img'/>
    <span className='movie-banner_description'>After a shopping mall in Chennai gets hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists. </span>
    <Playbutton />
  </div>
);

export default MovieBanner;
