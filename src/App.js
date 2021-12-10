import React from "react";
import { Card } from "./components/Card";

import { getPokemons } from "./services/pokemons";

function App() {
  const pokemons = getPokemons();

  return (
    <>
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} />
      ))}
    </>
  );
}

export default App;
