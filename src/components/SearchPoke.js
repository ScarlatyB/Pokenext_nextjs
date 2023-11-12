import Card from "./Card"
import { useState } from "react"
import styles from '@/styles/SearchPoke.module.scss'
import AllPokemons from "@/pages/allpokemons"


export default function SearchPoke({pokemon}){
    
    console.log('returnpoki',pokemon)

    const [SearchPokemon, SetSearchPokemon] = useState("")
  


    return(
    
        <div  className={styles.searchP}>
        <input
         type="text" 
         placeholder = "search your pokemon here"
         onChange = {(event) => {
        SetSearchPokemon(event.target.value);
        }}
        />
        {pokemon && pokemon.filter((val) =>{
            if(SearchPokemon === ""){
                return null
            }else if(val.name.toLowerCase().includes(SearchPokemon.toLowerCase())){
                return val
            }
        }).map((pokemon)=>{
          return (
          
          <div key={pokemon} className={styles.imgSearcthp} >
           <Card key={pokemon.id}pokemon={pokemon} className={styles.card} />
          </div>
          )
        })}
        </div>
    )
}
