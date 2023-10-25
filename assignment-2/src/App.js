import React from "react";
import { useState } from "react";
import SignInPage from "././sign-in/sign-inpage";
import Home_page from "./Home_page/Home_page";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { useContext,createContext } from "react";
// import Search from "./c";
import { useEffect } from "react";
import Search from "./components/Search.jsx/Search";
import Mylist from "./components/Watch_list/Watch_list";
import View from "../src/components/Watch_list/view";
import SignupPage from "./Signup form/Signup_page";
import SignUpForm from "./Signup form/form";
import TotalSignup_form from "./Signup form/totalfomsignup";
export const UserContext = createContext();

const App = () => {
  

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });
  const [userRecords, setUserRecords] = useState([]);

  console.log("last",watchlist)

  const addToWatchlist = (movie) => {
    const isAlreadyInWatchlist = watchlist.some((item) => item.id === movie.id);
  
    if (!isAlreadyInWatchlist) {
      setWatchlist((prevWatchlist) => {
        const newWatchlist = [...prevWatchlist, movie];
        localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
        return newWatchlist;
      });
    }
  };
  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter((movie) => movie.id !== movieToRemove.id);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };
 

  useEffect(() => {
    fetch('https://mocki.io/v1/b83046e1-8126-4e39-b53f-ca250e42d5b8') 
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);
  useEffect(() => {
    console.log('Search value state:', searchValue);
  }, [searchValue]);
  // const [mylist,setmylist]=useState(movies)
  // console.log("mylist",mylist)
  const router = createBrowserRouter([
    { path: '/', element: <SignInPage users={userRecords} /> },
    { path: '/home', element: <Home_page name={movies} watchlist={watchlist} setAllMovies={setMovies} addToWatchlist={addToWatchlist}/> },
    { path: '/search', element: <Search setSearchValue={setSearchValue} movielist={movies} entered={searchValue} /> },
    { path: '/mylist', element: <View watchlist1={watchlist} removeFromWatchlist={removeFromWatchlist}/>},
      {path:'/signup', element:<SignupPage />},
      {
        path:'/form',element:<TotalSignup_form />
      }
  ]);

  return (
    <UserContext.Provider value={[movies,setMovies]} >
    <RouterProvider router={router}>
    </RouterProvider>
    </UserContext.Provider>
  );
};

export default App;
