// CSS
import styles from "./Card.module.css";

export default function Card({ name, sprite }) {
  return (
    <div className={styles.moldura}>
      <figure className={styles.figura}>
        <img className={styles.sprite} src={sprite} alt={name} />
        <figcaption className={styles.legenda}>{name}</figcaption>
        <button value={name} className={styles.btnGuess}>
          I choose you!
        </button>
      </figure>
    </div>
  );
}
