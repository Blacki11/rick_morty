//import "./App.css";
import Card from "./components/card/Card.jsx";
import Cards from "./components/cards/Cards.jsx";
//import SearchBar from "./components/searchbar/SearchBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
//import characters, { Rick } from "./data.js";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import About from "./components/about/about.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error from "./components/error/Error.jsx";
import Favorite from "./components/favorite/Favorite"
import Form from "./components/loggin/Form.jsx"
import validate  from "./components/loggin/validate.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate()

  const username = "example@gmail.com"
  const password = "asd123"

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const login = (userData)=>{
    //username && password === userData.username && userData.password
    if(username === userData.username && password === userData.password){
      setAccess(true)
      navigate("/home")
    }
  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  function randomizer() {
    const number1 = Math.floor(Math.random() * 827);
    fetch(`https://rickandmortyapi.com/api/character/${number1}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div>
      <Nav onSearch={onSearch} randomizer={randomizer}></Nav>
      <Routes>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="Favorite" element={<Favorite/>}></Route>
        <Route path="About" element={<About />}></Route>
        <Route
          path="Home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="Detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
