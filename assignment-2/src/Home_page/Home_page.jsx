import Header from "../components/header/header";
import Cards from "../components/cards/cards";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
function Home_page({ name, watchlist, addToWatchlist }) {
  return (
    <div className="body">
      <Header yes={name} />
      <MovieBanner />
      <p></p>
      <p className="categories">Recently Added</p>
      <Cards
        movies={name}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
      />
      <p className="categories">Continue Watching</p>
      <Cards
        movies={name}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
      />
      <p className="categories">Everyone's Watching</p>

      <Cards
        movies={name}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
      />
      <Footer />
    </div>
  );
}
export default Home_page;
