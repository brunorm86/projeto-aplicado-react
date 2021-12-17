import { useEffect } from "react/cjs/react.development";
import styles from "./Card.module.css";

const COLOR_MAP = {
  fire: "#ff8744",
  grass: "#436147",
  rock: "#727272",
  water: "#80C5F8",
  electric: "#F5E443",
  ground: "#6C400D",
  psychic: "#D3A9E7",
  ice: "#006CBB",
  flying: "#8B8B8B",
  bug: "#15994A",
  poison: "#765757",
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
        <PokemonPropertiesItem title="Tipo:" list={pokemon.type} />
        <PokemonPropertiesItem title="Habilidades:" list={pokemon.abilities} />
        <PokemonPropertiesItem title="Fraquezas:" list={pokemon.weakness} />
      </div>
    </div>
  );
};

const PokemonPropertiesItem = ({ title, list }) => {
  console.log(list);
  return (
    <div className={styles.cardDescItem}>
      <span className={styles["card__spec-title"]}>{title}</span>
      <div className={styles["card__spec-value"]}>
        {list.map((property) => (
          <span key={property} className={styles.pokePropertyItem} style={{ color: COLOR_MAP[property] }}>
            {property
            }</span>))}
      </div>
    </div>
  );
};
