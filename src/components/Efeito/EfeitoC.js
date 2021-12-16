// import { useState } from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

import { GameCard } from "./components/GameCard";
import { fetchGames, filterGamesByTitle } from "./utils";

/**
 * Nosso componente deve buscar uma lista de jogos e exibir o nome
 * e a plataforma de cada jogo.
 *
 * Além disso, temos um filtro de títulos de jogos. Nossa lista deve ser
 * filtrada quando digitamos o nome do jogo.
 *
 * - Use dois useEffects, um para a busca dos jogos, outro para realizar
 * a filtragem dos jogos
 *
 * - Use a função fetchGames(), que é assíncrona, para retornar
 * a lista de objetos de jogo com as propriedades `id`, `title` e `platform`.
 *
 * - Use a função filterGamesByTitle(), passando a lista original e o
 * termo de busca, para que você tenha uma nova lista com os games
 * filtrados.
 *
 * Você deve usar a função de fetchGame com async / await para completar
 * o desafio!
 *
 */

export const EfeitoC = () => {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  // IMPLEMENTE AQUI -------------------
  const buscarJogos = async () => {
    const listaDeJogos = await fetchGames();
    setAllGames(listaDeJogos);
    setFilteredGames(listaDeJogos);
  };

  useEffect(() => {
    buscarJogos();
  }, []);

  useEffect(() => {
    const jogosFiltrados = filterGamesByTitle(allGames, searchTerm);
    setFilteredGames(jogosFiltrados);
  }, [searchTerm]);
  // -----------------------------------

  const handleSearchInput = (value) => {
    setsearchTerm(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.item}>
          <label htmlFor="search-game">Buscar:</label>
          <input
            id="search-game"
            className={styles.textInput}
            type="text"
            onChange={(event) => handleSearchInput(event.target.value)}
          />
        </div>
        {filteredGames.length === allGames.length ? (
          <h2>Todos os {allGames.length} jogos</h2>
        ) : (
          <h2>
            {filteredGames.length} jogos encontrados com o termo "{searchTerm}"
          </h2>
        )}
        <div className={styles.gameGrid}>
          {filteredGames.length === 0 ? (
            <p>Nenhum jogo para ser exibido</p>
          ) : (
            filteredGames.map((game) => <GameCard key={game.id} game={game} />)
          )}
        </div>
      </div>
    </div>
  );
};
