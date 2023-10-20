import React from "react";
import { useState } from "react";
import SignInPage from "././sign-in/sign-inpage";
import Home_page from "./Home_page/Home_page";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
// import Search from "./c";
import { useEffect } from "react";
import Search from "./components/Search.jsx/Search";
import Mylist from "./components/Watch_list/Watch_list";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  
  useEffect(() => {
    console.log('Search value state:', searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetch('https://mocki.io/v1/b83046e1-8126-4e39-b53f-ca250e42d5b8') 
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);
  // const [mylist,setmylist]=useState(movies)
  // console.log("mylist",mylist)
  const router = createBrowserRouter([
    { path: '/', element: <SignInPage /> },
    { path: '/home', element: <Home_page name={movies} setval={setMovies}/> },
    { path: '/search', element: <Search setSearchValue={setSearchValue} movielist={movies} entered={searchValue} /> },
    { path: '/mylist', element: <Mylist all={movies} setall={setMovies}/> }
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default App;
