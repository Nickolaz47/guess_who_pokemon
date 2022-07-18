import style from "./Card.module.css";
import CorrectAnswer from "../functions/correctAnswer";
import WrongAnswer from "../functions/wrongAnswer";

export default function Card({ name, sprite, sortedPokemon, Restart }) {
  // console.log(Restart)
  const eventListener = (e) => {
    if (window.confirm("Are you sure?")) {
      alert("I choose you, " + e.target.value + "!");
      if (sortedPokemon[0].name === e.target.value) {
        alert("CORRECT!");
      } else {
        alert(`WRONG! The right answer was ${sortedPokemon[0].name}!`);
      }
      Restart();
    }
  };

  return (
    <div className={style.moldura}>
      <figure className={style.figura}>
        <img className={style.sprite} src={sprite} alt={name} />
        <figcaption className={style.legenda}>{name}</figcaption>
        <button value={name} className={style.btnGuess} onClick={eventListener}>
          I choose you!
        </button>
      </figure>
    </div>
  );
}
