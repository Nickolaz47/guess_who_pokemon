// Components
import Card from "./Card";
// Hooks
import { useContext } from "react";
// Context
import { PokemonContext } from "../context/PokemonContext";
// CSS
import styles from "./DisplayCard.module.css";

export default function DisplayCard() {
  const { pokemonDB } = useContext(PokemonContext);
  return (
    <div className={styles.display}>
      {pokemonDB.map(({ name, sprite }, idx) => (
        <Card key={idx} name={name} sprite={sprite} />
      ))}
    </div>
  );
}
