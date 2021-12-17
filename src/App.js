import React, { useEffect, useState, useRef } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { fetchAllPokemons } from "./services/pokemons-service";
import styles from "./App.module.css";

function App() {
  const pokemons = useRef([]);
  const elementoTopo = useRef();

  //const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);

  const [pagina, setPagina] = useState(1);

  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    (async () => {
      const lista = await fetchAllPokemons();
      pokemons.current = lista;
      setPokemonsFiltrados(lista.slice((pagina * 40 - 40), pagina * 40));
    })();
    // IIFE Imediatelly Invoked Function Expression
  }, []);

  useEffect(() => {
    const listaFiltrada = pokemons.current.filter((pokemon) => {
      return new RegExp(termoBusca, "ig").test(pokemon.name);
    });
    setPokemonsFiltrados(listaFiltrada);
  }, [termoBusca]);


  useEffect(() => {
    const paginado = pokemons.current.slice((pagina * 40) - 40, pagina * 40);
    setPokemonsFiltrados(paginado);
  }, [pagina]);

  const handleGoPrevious = () => {
    setPagina((p) => {
      if (p > 1) {
        return p - 1;
      } else {
        return 1;
      }
    }
    )
  };

  const handleGoNext = () => {
    setPagina((p) => {
      if (p >= Math.ceil(pokemons.current.length / 40)) {
        return Math.ceil(pokemons.current.length / 40);
      } else {
        return p + 1;
      }
    });
  }

  const handleGoTop = () => {
    elementoTopo.current.scrollIntoView({ behavior: "smooth" });

  }
 

  return (
    <>
      <Header />
      <div ref={elementoTopo} className={styles.container}>
        <input
          onChange={(event) => {
            setTermoBusca(event.target.value);
          }}
          className={styles.searchInput}
          type="text"
          placeholder="Digite o nome do pokemon"
        />
        {termoBusca}
        <h1 className={styles.pageTitle}>Total de pokemons: {pokemons.current.length}</h1>
        <h1 className={styles.pageTitle}>Página: {pagina}</h1>
        <h1 className={styles.pageTitle}>Pokemons: </h1>
        <button onClick={handleGoPrevious}>Anterior</button>
        <button onClick={handleGoNext}>Próximo</button>
        <div className={styles.cardGrid}>
          {pokemonsFiltrados.length === 0
            ? "Nenhum pokemon encontrado"
            : pokemonsFiltrados.map((pokemon) => <Card pokemon={pokemon} />)}
        </div>
        <button onClick={handleGoTop}>Voltar para o topo</button>
      </div>
    </>
  );
}

export default App;
