import React, { useContext } from "react";
import Header from "../components/header/header";
import Cards from "../components/cards/cards";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../App";
function Home_page({ name, watchlist, addToWatchlist }) {
  const  movies  = useContext(Usercontext)
   console.log(movies)
  // Filter movies based on different criteria
  const recentlyAdded = movies.filter((movie) => movie.type === "recently added");
  const Action = movies.filter((movie) => movie.type === "Action");
  const everyonesWatching = movies.filter((movie) => movie.type === "everyones_watching");
  console.log("recently added",recentlyAdded)
  return (
    <div className="body">
      <Header yes={name} />
      <MovieBanner />
      <p></p>

      <h3 className="categories">Recently Added</h3>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={recentlyAdded}
      />

      <h3 className="categories">Action</h3>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={Action}
      />

      {/* <h2 className="categories">Everyone's Watching</h2>
      <Cards
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        movies={everyonesWatching}
      /> */}

      <Footer />
    </div>
  );
}

export default Home_page;
