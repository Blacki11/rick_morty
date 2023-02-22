import styled from "styled-components";
import { useState } from "react";

export default function SearchBar(props) {
  const [personaje, setPersonaje] = useState("");
  function change(event) {
    setPersonaje(event.target.value);
  }
  return (
    <div>
      <input type="search" value={personaje} onChange={change} />
      <button onClick={() => props.onSearch(personaje)}>Agregar</button>
      <button onClick={() => props.randomizer()}>radomizer</button>
    </div>
  );
}
