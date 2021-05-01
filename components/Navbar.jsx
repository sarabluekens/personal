import styles from "./Navbar.module.css";

import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <Link href="/"><li className={styles.nav__list__item} >Create message</li></Link>
                <Link href="/about"><li className={styles.nav__list__item} >About</li></Link>
                <Link href="/somethingelse"><li className={styles.nav__list__item} >Something else</li></Link>
                <Link href="/test"><a className={styles.nav__list__item} > test this</a></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;