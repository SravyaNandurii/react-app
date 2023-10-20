import React from "react";
import Card from "./card";
function Map({ y ,setall}) {
  // console.log("maped",newval1)
    return (
      <div className='cards'>
        {y.map((movie,index) => (
          <Card r={movie} ind={index}  setall={setall} all1={y}/>
        ))}
      </div>
    );
  }
  export default Map;
