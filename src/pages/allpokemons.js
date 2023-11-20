import Head from 'next/head'
import Image from 'next/image'                                                            
import { Inter } from '@next/font/google'
import Card from '@/components/Card'
import SearchPoke from '@/components/SearchPoke'
import Router from 'next/router'
import Link from 'next/link'
import styles from '../styles/Card.module.scss'



export async function getStaticProps (context){
  
    const maxPokemons = 251;
    
      const api = 'https://pokeapi.co/api/v2/pokemon/'
    
      const endPoint = `${api}?limit=${maxPokemons}`
      
      const res = await fetch(endPoint)
    
      const data = await res.json()
    
          
      {data.results.map((item, index)=>(
        item.id = index + 1
    
        ))}

    return{
      props: {
        pokemons: data.results,
      },
    }
  }

export default function AllPokemons({pokemons}){
    return(
    <div>
      <SearchPoke pokemon={pokemons}/>
      <div className={styles.title_container}>
        <h1 className={styles.h1}>Poke<span className={styles.span}>Next</span></h1>
        <Image className={styles.imgPokebola} src="/image/pokebola.png" alt="pokebola" width={50} height={50}/>
      </div>
      
      <div className={styles.pokemon_container}>
      {pokemons && pokemons.map((pokemon)=>(
      <Card key={pokemon.id} pokemon={pokemon}/>
      ))}
      </div>
    </div>
    )
}