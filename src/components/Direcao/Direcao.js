import { useState } from "react/cjs/react.development";

export const Direcao = () => {
  const [estaChegando, setEstaChegando] = useState(false);
  const [pessoa, setPessoa] = useState({ nome: "Fulano", sobrenome: "da Silva" });

  console.log(pessoa);

  const handleAlterarNome = () => {
    setPessoa((objAnterior) => {
      return { ...objAnterior, nome: "José" };
    });
  };

  const handleAlterarItinerario = () => {
    setEstaChegando((estaChegandoAnterior) => {
      return !estaChegandoAnterior;
    });
  };

  return (
    <div className="App">
      <p>
        {estaChegando
          ? `Olá, ${pessoa.nome} ${pessoa.sobrenome}, estou chegando!`
          : `Adeus, ${pessoa.nome} ${pessoa.sobrenome}, estou indo embora.`}
      </p>
      <button onClick={handleAlterarNome}>Alterar nome</button>
      <button onClick={handleAlterarItinerario}>Alterar itinerario</button>
    </div>
  );
};
