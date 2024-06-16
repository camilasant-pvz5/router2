import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const URL="https://pokeapi.co/api/v2/pokemon/"

const Detalles = () => {
    const [pokemon, setPokemon] = useState({})
const {name}= useParams();

const getData = async () => {
    try {
    
      const response = await fetch(URL+name)  
      const results = await response.json()
      setPokemon(results)
    }

    catch (error) { 
      console.log("no se llama")
    }
  }
  console.log (pokemon);

  useEffect(() => {
getData();
  }, [name])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className=" pokemon-image" />
        </div>
        <div className="col-md-6">
          <h1>{pokemon?.name}</h1>
          {pokemon?.stats && (
            <ul className="list-group">
              <li className="list-group-item">HP: {pokemon.stats[0].base_stat}</li>
              <li className="list-group-item">Attack: {pokemon.stats[1].base_stat}</li>
              <li className="list-group-item">Defense: {pokemon.stats[2].base_stat}</li>
              <li className="list-group-item">Special Attack: {pokemon.stats[3].base_stat}</li>
              <li className="list-group-item">Special Defense: {pokemon.stats[4].base_stat}</li>
              <li className="list-group-item">Speed: {pokemon.stats[5].base_stat}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detalles;