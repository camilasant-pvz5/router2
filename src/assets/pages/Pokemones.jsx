// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL ="https://pokeapi.co/api/v2/pokemon"
const Pokemones = () => {
  const [pokemones, setPokemones] = useState ([])
  const [name, setName] = useState("");
const navigate = useNavigate()

  const getData = async () => {
    try {
    
      const response = await fetch(URL)
      const {results} = await response.json()
      setPokemones(results)
    }


    catch (error) { 
      console.log("no se llama")
    }
  }
  useEffect(() => {
getData()
  }, [])
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
      <select
        className="form-select mb-3"
        style={{ maxWidth: '300px' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option value="" disabled defaultValue>
        <strong>POKEMONES</strong>
        </option>
        {pokemones.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/pokemones/${name}`)}
      >
       <strong>Detalles</strong>
      </button>
    </div>
  );
};

export default Pokemones;