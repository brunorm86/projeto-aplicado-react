import { useEffect } from "react/cjs/react.development";
import styles from "./Card.module.css";

const COLOR_MAP = {
  fire: "#ff8744",
  grass: "#436147",
  rock: "#727272",
  water: "#80C5F8",
};

export const Card = ({ pokemon }) => {
  useEffect(() => {
    console.log("Card do pokemon " + pokemon.name);

    return () => {
      console.log("Desmontagem do pokemon " + pokemon.name);
    };
  }, []);

  return (
    <div className={styles["card"]} key={pokemon.id}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={pokemon.ThumbnailImage} alt={pokemon.name} />
      </div>
      <h2 className={styles["card__title"]}>{pokemon.name}</h2>
      <div className={styles.description}>
        <CardDescriptionItem title="Tipo:" text={pokemon.type[0]} />
        <CardDescriptionItem title="Habilidades:" text={pokemon.type[0]} />
        <CardDescriptionItem title="Fraquezas:" text={pokemon.type[0]} />
      </div>
    </div>
  );
};

const CardDescriptionItem = ({ title, text }) => {
  return (
    <div className={styles.cardDescItem}>
      <span className={styles["card__spec-title"]}>{title}</span>
      <span className={styles["card__spec-value"]}>{text}</span>
    </div>
  );
};
