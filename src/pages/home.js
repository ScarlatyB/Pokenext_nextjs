import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import AllPokemons from './allpokemons'
import SearchPoke from '@/components/SearchPoke'
import axios from 'axios'
import styles from '../styles/Home.module.scss'

  


  const PokemonSection = () => {
    let [characterName, setCharacterName] = useState(null);
    let [number, setNumber] = useState(null);
    let [sprite, setSprite] = useState(null);
    let [randomNum, setRandomNum] = useState(25);
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
  
    function getRandomNum() {
      setRandomNum(Math.ceil(Math.random() * Math.floor(400)));
    }
  
    useEffect(() => {
      let pokeName, pokeId, pokeImage;
  
      pokeName = new Promise((resolve, reject) => {
        let charName = fetch(pokeURL)
          .then(response => response.json())
          .then(pokeData => pokeData.name);
        if (charName) {
          resolve(charName);
        } else {
          reject("Didn't catch 'em all!");
        }
      });
  
      pokeId = new Promise((resolve, reject) => {
        let idNum = fetch(pokeURL)
          .then(response => response.json())
          .then(idData => idData.id);
        if (idNum) {
          resolve(idNum);
        } else {
          reject("Didn't catch 'em all!");
        }
      });
  
      pokeImage = new Promise((resolve, reject) => {
        let charImg = fetch(pokeURL)
          .then(response => response.json())
          .then(imgData => imgData.sprites["front_default"]);
        if (charImg) {
          resolve(charImg);
        } else {
          reject("Didn't catch 'em all!");
        }
      });
  
      Promise.all([pokeName, pokeId, pokeImage]).then(([name, id, image]) => {
        setCharacterName(name.toUpperCase());
        setNumber(id);
        setSprite(image);
      });
    }, [pokeURL]);
  
    return (
      <>
        <button className={styles.btn} onClick={getRandomNum}>
        </button>
        <h2 className='h2'>{characterName}</h2>
        <p className='p'>is Pokemon number #{number}</p>
        <img src={sprite} alt={characterName} width={250} />
      </>
    );
  };
  
  export default function Home() {
    return (
      <div className={styles.App}>
        <h1>Click to get a random Pokemon!</h1>
        <PokemonSection />
      </div>
    );
  }


   

