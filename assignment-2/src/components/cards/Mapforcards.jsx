import React from "react";
import Card from "./card";
function Map({ y , setAllMovies, watchlist, addToWatchlist }) {
  console.log("Map - addToWatchlist:", addToWatchlist);
    return (
      <div className='cards'>
        {y.map((movie,index) => (
          <Card key={movie.id} r={movie} ind={index} setall={setAllMovies} watchlist={watchlist}  addToWatchlist={addToWatchlist}/>
        ))}
      </div>
    );
  }
  export default Map;
