import Card from "./Card";
import style from "./DisplayCard.module.css";

export default function DisplayCard({ data, sortedPokemon, restart }) {
  return (
    <div className={style.display}>
      {data.map((pkmn) => (
        <Card
          name={pkmn.name}
          sprite={pkmn.sprite}
          sortedPokemon={sortedPokemon}
          Restart={restart}
        />
      ))}
    </div>
  );
}
