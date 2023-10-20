import Header from "../components/header/header";
import Cards from "../components/cards/cards";
import MovieBanner from "../components/MovieBanner/MovieBanner";
import Footer from "../components/footer/footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Home_page({name ,setval}) {
  // console.log("yay",new1)
  return (
    <div className="body">
      <Header yes={name}/>
      <MovieBanner />
      <p className="categories">Recently Added</p>
      <ArrowBackIosIcon className="sliderArrow left" />
      <ArrowForwardIosIcon className="sliderArrow right" />
      <Cards movies={name}  setall={setval}/>
      <p className="categories">Continue Watching</p>
      <ArrowBackIosIcon className="sliderArrow left" />
      <ArrowForwardIosIcon className="sliderArrow right" />
      <Cards movies={name} setall={setval}/>
      <p className="categories">Everyone's Watching</p>
      <ArrowBackIosIcon className="sliderArrow left" />
      <ArrowForwardIosIcon className="sliderArrow right" />
      <Cards movies={name} setall={setval}/>
      <Footer />
    </div>
  );
}
export default Home_page;
