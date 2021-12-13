import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import { getPokemons } from "./services/pokemons";

function App() {
  const pokemons = getPokemons();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>All pokemons</h1>
        <div className={styles.cardGrid}>
          {pokemons.map((pokemon) => (
            <Card pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
