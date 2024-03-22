import { useEffect, useState } from 'react' // para usar uma classe de componente tem q importar o Component
import axios from 'axios'
import PokInCard from './PokInCard';
import '../style/index.css'

const userPokes = [];

function getPokemon(name, sprite, id, limitedPOk) {
  if(name !== undefined && limitedPOk.length < 1) {
    userPokes.push(
      <div key={id} className={`card ${name}`}>
        <PokInCard name={name} sprite={sprite}/>
      </div>
    )
  }
}

function Card() {
  const [data, setData] = useState([])

  useEffect(() => { // Aqui vc faz as requisições
    const pokemon = async () => {
      try {
        for(let i = 1; i <= 721; i++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          setData(response.data)
        }
      } catch (error) {
        console.error("Houve um erro: " + error)
      }
    };

    pokemon()
  }, [])

  const limitedPOk = document.getElementsByClassName(`${data.name}`);
  const sprite_pok = Object.assign({}, data.sprites)
  getPokemon(data.name, sprite_pok.front_default, data.id, limitedPOk)

  return (
    <>
      {userPokes}
    </>
  )
}

export default Card
