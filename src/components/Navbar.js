import Link from "next/link"
import Image from 'next/image'
import styles from "../styles/Navbar.module.scss"
import AllPokemons from "@/pages/allpokemons"

export default function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <Image src="/image/pokebola.png" alt="pokebola" width={30} height={30}/>
            <h1 className={styles.h1}>PokeNext</h1>
            </div>
            
            <ul className={styles.links_items}>
                <li>
                    <Link href= "/home">Home</Link>
                </li>
                <li>
                    <Link href= "/allpokemons">All pokemons</Link>
                </li>
                <li>
                    <Link href= "/about">About</Link>
                </li>
                
            </ul>
        </nav>
        </>
    )
}