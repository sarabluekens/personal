import styles from "./Navbar.module.css";

import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {

    return ( 
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <Image src="/img/logo.png" width="100" height="100"/>
                <Link href="/"><li className={styles.nav__list__item} >Create message</li></Link>
                <Link href="/about"><li className={styles.nav__list__item} >About</li></Link>
                <Link href="/somethingelse"><li className={styles.nav__list__item} >Something else</li></Link>
            </ul>
        </nav>
     );
}