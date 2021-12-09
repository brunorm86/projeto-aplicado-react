import PropTypes from 'prop-types';

/**
 * Recapitulando:
 * Podemos atribuir valores padrão para nossas props
 * diretamente na desestruturação das props:
 * Ex.: const Greeting = ({ name = "fulano", lastName = "da silva" }) => {...}
 *
 * Esta é a forma mais comum de se utilizar valor padrão
 * para props.
 */
export const Greeting = ({ name = '', lastName, isLoading = false, setIsLoading }) => {
  // outra forma de destructuring (recebendo um objeto 'props' como argumento)
  // const { name, lastName} = props
  //
  // Também pode-se passar valor padrão para as props:
  // const { name = "fulano", lastName="da silva"} = props

  if (isLoading) {
    return <div> loading...</div>;
  }

  return (
    <>
      {/* Condicional com ternário
      {lastName ? (
        <h1>
          Olá, {name} {lastName}!
        </h1>
      ) : (
        <h1>{name}</h1>
      )} */}

      {/* Condicional
      {(lastName && name) && (
        <h1>
          Olá, {name} {lastName}!
        </h1>
      )} */}

      {/* condicional na função */}
      {/* <h1>
        Olá, {name} {lastName && lastName}!
      </h1> */}

      <h1>
        Olá, {name} {lastName}!
      </h1>

      <button onClick={setIsLoading}>Click</button>
    </>
  );
};

/**
 * Com o defaultProps, a validação se o dado é requerido ou não
 * acontece antes da instanciação do componente. Por isso não temos
 * erro de "is required" quando usamos essa técnica e tipamos nossa
 * prop como requerida, ao contrário do que acontece com os valores
 * padrão passados diretamente no destructuring.
 */
Greeting.defaultProps = {
  name: 'fulano',
  // lastName: 'da silva',
};

/**
 * Tente criar suas validações usando outras propriedades do PropTypes!
 */
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
