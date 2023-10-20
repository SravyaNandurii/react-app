import React, { useEffect, useState } from "react";
import "../../components/style.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
function Header({ setSearchValue }) {
  const onInputChange  = (e) => {
    e.preventDefault()
    setSearchValue(e.target.value);
    console.log('Input value:', e.target.value);
  };
  const navigate=useNavigate();
  const [scroll, setscroll] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const Navbar = () => {
    console.log("yay", setscroll);
    if (window.scrollY >= 10) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll", Navbar);
  })
  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <header className={scroll ? "header" : "header_active"}>
      <div className="header_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="header_links">
        <a href="/home">Home</a>
        <a href="/tv-shows">Characters</a>
        <a href="/movies">Movies</a>
        <a href="/new-releases">New Releases</a>
        <a href="/mylist">My List</a>
      </div>
      <div className={`header_icons ${isSearchOpen ? "search-open" : "search-open"}`}>
        {isSearchOpen ? (
          <input  className="header_inputsearch" onClick={()=>navigate('/search')} onChange={onInputChange} />
        ) : (
          <div>
            <SearchIcon onClick={handleSearchIconClick} />
          </div>
        )}
        
        </div>
      <div className="header_onlyicons">
        <div className="header_notification">
          <NotificationsNoneIcon />
        </div>
        <div className="header_profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Profile"
          />
        </div>

        <div className="header_profile_dropdown">
          <ArrowDropDownIcon />
          <div className="Options">
            <span className="span">Settings</span>
            <span className="span">Logout</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
