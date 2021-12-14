// import { useState } from "react";
import styles from "./styles.module.css";

export const Estado = () => {
  // useState();

  const handleChangeColor = () => {};
  const handleChangeDay = () => {};
  const handleSeeMore = () => {};
  const handleFetchPerson = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* 
            A cor do texto é cinza. Ao clicar no botão, deve mudar para azul.
            O estado deve ser uma string com o nome da cor
         */}
        <p style={{ color: "gray" }}>Mudar a cor do texto ao clicar no botão abaixo</p>
        <button onClick={handleChangeColor}>Trocar a cor</button>
      </div>

      <div className={styles.item}>
        {/* 
            Deve trocar o ícone e o texto do botão ao clicar no botão.
            O estado deve ser um booleano.
         */}
        <p>{true ? "☀️" : "🌙"}</p>
        <button onClick={handleChangeDay}>{true ? "escurecer" : "amanhecer"}</button>
      </div>

      <div className={styles.item}>
        <h4>Uma mensagem oculta</h4>
        {/* 
            Deve mostrar o texto oculto ao clicar em "ver mais" e alterar o texto para "ocultar".
            Deve ser possível trocar entre esses dois estados a cada clique.
            O estado deve ser um booleano.
         */}
        <button onClick={handleSeeMore}>{true ? "ver mais..." : "ocultar"}</button>
        {!true && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi blanditiis autem magnam dolorem
            dignissimos. Reiciendis consequuntur aperiam suscipit reprehenderit?
          </p>
        )}
      </div>

      <div className={styles.item}>
        <h4>Ficha cadastral</h4>
        {/* 
            Deve possuir dois estados. 
            - O primeiro deverá guardar um objto "pessoa", e deve iniciar como null.

            - O segundo será responsável pela exibição das informações na tela, e deve
            ter um dos seguintes valores string: 'idle', 'loading' ou 'success'. O estado
            inicial deve ser 'idle'. Ao clicar em "Carregar dados", o estado deve mudar para
            'loading'. Quando os dados forem carregados, o estado deve mudar para 'success'.
         */}
        {"idle" && <p>Nenhum dado a ser exibido.</p>}
        {"loading" && <button onClick={handleFetchPerson}>Carregar dados do usuário</button>}
        {"success" && (
          <div>
            <p>Nome: {"pessoa.nome"}</p>
            <p>Telefone: {"pessoa.telefone"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const PESSOA = {
  nome: "José João da Silva",
  telefone: "(11) 9999-9999",
};

function buscarDados() {
  return new Promise((res) => {
    setTimeout(res, 5000, PESSOA);
  });
}
