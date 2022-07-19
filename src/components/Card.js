// CSS
import styles from "./Card.module.css";

export default function Card({
  name,
  sprite,
  types,
  color,
  generation,
  habitat,
  legendary,
  shape,
}) {
  return (
    <div className={styles.frame}>
      <figure className={styles.figure}>
        <div className={styles.image}>
          <img className={styles.sprite} src={sprite} alt={name} />
          <div className={styles.tips}>
            {`Types: ${types.join(", ")}`}
            <br />
            {`Color: ${color}`}
            <br />
            {`Generation: ${generation}`}
            <br />
            {`Habitat: ${habitat}`}
            <br />
            {`Legendary: ${legendary}`}
            <br />
            {`Shape: ${shape}`}
          </div>
        </div>
        <figcaption className={styles.subtitle}>{name}</figcaption>
        <button value={name} className={styles.btnGuess}>
          I choose you!
        </button>
      </figure>
    </div>
  );
}
