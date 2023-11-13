import Link from "next/link"
import styles from "../styles/About.module.scss"
import Image from "next/image"

export default function About(){
    return(
    <div className={styles.about}>
    <h1>About the project</h1>
    <h2>Technologies</h2>
    <ul>
        <ol>Pokemon API Request (Fetch API)</ol>
        <ol>CSS/SCSS, media queries</ol>
        <ol>Random Pokemon search input</ol>
        <ol>getStaticProps, useState,useEffect</ol>
        <ol></ol>
    </ul>
    <Image src="/image/pikachu.png" alt="pokemon" width={250} height={300}/>
    </div>
    )
}