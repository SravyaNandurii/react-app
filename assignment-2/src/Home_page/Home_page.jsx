import Header from "../components/header/header";
import Cards from "../components/cards/cards";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import Footer from "../components/footer/footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Home_page({name ,movies, watchlist,setAllMovies, addToWatchlist}) {
  // console.log("yay",new1)
  return (
    <div className="body">
      <Header yes={name}/>
      <MovieBanner />
      <p></p>
      <p className="categories">Recently Added</p>
      <Cards movies={name}setAllMovies={setAllMovies} watchlist={watchlist} addToWatchlist={addToWatchlist}/>
      <p className="categories">Continue Watching</p>
      <Cards movies={name} setAllMovies={setAllMovies} watchlist={watchlist} addToWatchlist={addToWatchlist}/>
      <p className="categories">Everyone's Watching</p>
      
      <Cards movies={name} setAllMovies={setAllMovies} watchlist={watchlist} addToWatchlist={addToWatchlist}/>
      <Footer />
    </div>
  );
}
export default Home_page;
