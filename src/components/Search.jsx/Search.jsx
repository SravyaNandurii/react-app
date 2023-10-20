// Search.js
import React from 'react';
import Header from '../header/header';
import '../Search.jsx/Search.css';
import { useState ,useEffect} from 'react';
import Card from '../cards/card';
import Cards from '../cards/cards';
import Footer from '../../sign-in/footer';
function Search({setSearchValue, movielist, entered }) {
  const filteredMovies = movielist.filter((each) => each.title.toLowerCase().includes(entered.toLowerCase()));

  return (
    <div className='totaldiv'>
        <div className='Header_div'>
      <Header setSearchValue={setSearchValue}/>
      </div>
      <div className='searchcard_div'>
      {filteredMovies.map((f, index) => (
  <div key={index} className='innerdiv'>
    <img src={f.poster} alt={f.title} className="search_img" />
  </div>
))}

      </div>
      <Footer />
    </div>
  );
}

export default Search;
