// Hooks
import { useCheckResult } from "../hooks/useCheckResult";
// CSS
import styles from "./Card.module.css";

const Card = ({
  name,
  sprite,
  types,
  color,
  generation,
  habitat,
  legendary,
  shape,
}) => {
  const { checkResult } = useCheckResult();
  return (
    <div className={styles.frame}>
      <figure className={styles.figure}>
        <div className={styles.image}>
          <img className={styles.sprite} src={sprite} alt={name} />
          <div className={styles.tips}>
            {`Type(s): ${types.join(", ")}`}
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
        <button
          onClick={() => checkResult({ name, sprite })}
          className="btn btn-outline-light"
        >
          I choose you!
        </button>
      </figure>
    </div>
  );
};

export default Card;
