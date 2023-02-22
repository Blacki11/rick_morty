import { useState } from "react";
export default function Randomizer(props) {
  return (
    <div>
      <button onClick={() => props.randomizer()}>random</button>
    </div>
  );
}

//        const [characters1, setCharacters1] = useState([]);
//
//        const number1 = Math.floor(Math.random() * 827);
//        fetch(`https://rickandmortyapi.com/api/character/${number1}`)
//          .then((response) => response.json())
//          .then((data) => {
//            if (data.name) {
//              console.log("entra?");
//              setCharacters1((oldChars) => [...oldChars, data]);
//            } else {
//              console.log("que pacho");
//            }
//          });
