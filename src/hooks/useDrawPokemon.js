import pokemon from "../data/pokemon1_3.json";

export const useDrawPokemon = () => {
  
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const drawPokemon = () => {
    const randomInt = randomIntFromInterval(0, pokemon.length);
    return pokemon[randomInt];
  };

  return drawPokemon();
};
