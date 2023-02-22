import SearchBar from "../searchbar/SearchBar";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../about/about";
import App from "../../App";
import Randomizer from "../randomizer/Randomizer";

export default function Nav(props) {
  return (
    <div>
      <button>
        <Link to="About">About</Link>
      </button>
      <button>
      <Link to="Home">Home</Link>
      </button>
      <button>
      <Link to="Favorite">Favorite</Link>
      </button>
      <SearchBar onSearch={props.onSearch} randomizer={props.randomizer}></SearchBar>
    </div>
  );
}
