import React, { useState } from 'react';

import './App.css';
import { Greeting } from './components/Greeting';
import { getPokemons } from './services/pokemons';

function App() {
  // Hook para controlar o estado de loading
  // const [isLoading, setIsLoading] = useState(false);
  const pokemons = getPokemons();

  // Função para alterar o estado de loading
  // const handleClick = () => {
  //   setIsLoading(!isLoading);
  // };

  // exemplo de array para renderização
  // const list = [
  //   { id: 1, name: 'dev', lastName: 'inHouse' },
  //   { id: 2, name: 'dev2', lastName: 'inHouse2' },
  // ];

  return (
    <>
      {pokemons.map((pokemon) => (
        <h1 key={pokemon.id}>{pokemon.name}</h1>
      ))}

      {/* exemplo de renderização de lista de componentes
      {list.map((item) => (
        <Greeting
          key={item.id}
          name={item.name}
          lastName={item.lastName}
          isLoading={isLoading}
          setIsLoading={handleClick}
        />
      ))} */}
    </>
  );
}

export default App;
