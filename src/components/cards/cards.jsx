import React, { useState, useEffect } from 'react';
import Map from './Mapforcards';
const Cards = ({movies,setall}) => {
  
  console.log("cards",movies)
  
    return (
      <div >
      <Map y={movies} setall={setall}/>
      </div>
    );
  };

  export default Cards;


