// import { useState } from "react";
import { useState, useEffect } from "react";

import styles from "./styles.module.css";

/**
 * Nosso componente deve buscar em um serviço web uma lista de
 * posts e exibir os títulos na página.
 *
 * Toda a estrutura da página está montada. Você deve construir
 * o useEffect para criar a busca pelos jogos e o useState para
 * fazer o gerenciamento de estado.
 *
 * O endereço do serviço é https://jsonplaceholder.typicode.com/posts
 * Use o fetch para realizar a busca.
 *
 *
 */
export const EfeitoB = () => {
  const posts = [];

  // IMPLEMENTE AQUI -------------------

  // -----------------------------------

  if (posts.length === 0) {
    return (
      <div className={styles.container}>
        <h2>Nenhum post para ser exibido</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Todos os {posts.length} posts</h2>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li className={styles.postItem}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
