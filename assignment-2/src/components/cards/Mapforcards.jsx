import React from "react";
import Card from "./card";
import {createContext} from "react";
  export const UserContext = createContext();
function Map({ y , watchlist, addToWatchlist }) {
  return (
      <UserContext.Provider value={y}>
      <div className='cards'>
        {y.map((movie,index) => (
          <Card key={movie.id} r={movie} ind={index} watchlist={watchlist}  addToWatchlist={addToWatchlist}/>
        ))}
      </div>
      </UserContext.Provider>
    );
  }
  export default Map;
