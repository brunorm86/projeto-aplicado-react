// import { useState } from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getTimestamp, sendToLogger } from "./utils";

/**
 * Nosso componente deve registrar um log de cada tecla digitada pelo
 * usuário do sistema no input de texto. Esse log deve conter o 'timestamp'
 * (data e hora) da digitação e qual é o valor do campo naquele momento.
 *
 * O log é um OBJETO com as propriedades "timestamp" e "text".
 *
 * - Devemos usar o useEffect para enviar esse registro para um serviço
 * de logging.
 *
 * - Devemos criar o estado para gerenciar o texto do campo de texto.
 *
 * Para buscar o timestamp, utilize a função getTimestamp() disponível.
 * Para enviar o log, utilize a função sendToLogger() disponível.
 *
 */
export const EfeitoA = () => {
  const text = "";

  // IMPLEMENTE AQUI -------------------

  // getTimestamp()
  // sendToLogger()
  // loggerObj = { timestamp: '', text: ''}
  // -----------------------------------

  const handleTextInput = (value) => {
    // ???
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h2>Sistema de segurança</h2>
        <p>Nós estamos monitorando tudo o que você digita.</p>
        <input className={styles.textInput} type="text" onChange={(event) => handleTextInput(event.target.value)} />
        <div className={styles.inputGroup}>Você digitou : {text && <code className={styles.code}>{text}</code>}</div>
      </div>
    </div>
  );
};
