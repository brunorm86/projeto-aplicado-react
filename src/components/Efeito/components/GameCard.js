import styles from "./GameCard.module.css";

export const GameCard = ({ game }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{game.title}</h3>
      <span className={styles.platform}>{game.platform}</span>
    </div>
  );
};
