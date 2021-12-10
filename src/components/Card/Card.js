import styles from "./Card.module.css";

const COLOR_MAP = {
  fire: "#ff8744",
  grass: "#436147",
  rock: "#727272",
  water: "#80C5F8",
};

export const Card = ({ pokemon }) => {
  console.log(styles);

  return (
    <div className={styles["card"]} key={pokemon.id}>
      <h1 className={styles["card__title"]}>{pokemon.name}</h1>
      <p>
        <span className={styles["card__spec-title"]}>Tipo:</span>
        <span className={styles["card__spec-value"]} style={{ color: COLOR_MAP[pokemon.type[0]] }}>
          {pokemon.type[0]}
        </span>
      </p>
    </div>
  );
};
