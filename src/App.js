import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import { getPokemons } from "./services/pokemons";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);

  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    console.log("useEffect fetch");
    getPokemons().then((listaPoke) => {
      setPokemons(listaPoke);
      setPokemonsFiltrados(listaPoke);
    });
  }, []);

  useEffect(() => {
    const listaFiltrada = pokemons.filter((pokemon) => {
      return new RegExp(termoBusca, "ig").test(pokemon.name);
    });
    setPokemonsFiltrados(listaFiltrada);
  }, [termoBusca]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <input
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          className={styles.searchInput}
          type="text"
          placeholder="Digite o nome do pokemon"
        />
        {termoBusca}
        <h1 className={styles.pageTitle}>All pokemons</h1>
        <div className={styles.cardGrid}>
          {pokemonsFiltrados.length === 0
            ? "Nenhum pokemon encontrado"
            : pokemonsFiltrados.map((pokemon) => <Card pokemon={pokemon} />)}
        </div>
      </div>
    </>
  );
}

export default App;
