import React from "react";
import Header from "../header/header";
import "../Search.jsx/Search.scss";
function Search({ setSearchValue, movielist, entered }) {
  const filteredMovies = movielist.filter((each) =>
    each.title.toLowerCase().includes(entered.toLowerCase())
  );

  return (
    <div className="totaldiv">
      <div className="totaldiv__Header_div">
        <Header setSearchValue={setSearchValue} />
      </div>
      <div className="totaldiv__searchcard_div">
        {filteredMovies.map((f, index) => (
          <div key={index} className="totaldiv__searchcard_div__innerdiv">
            <img
              src={f.poster}
              alt={f.title}
              className="totaldiv__searchcard_div__innerdiv__search_img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
