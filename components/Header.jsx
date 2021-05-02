import React from 'react';
import PropTypes from "prop-types";
import styles from "./Header.module.css";


const Header = () => {
    return (  
        <>
            <h1 className={styles.title}> Schrijf het uit! </h1>

            <p className={styles.description}>
                De wereld staat op zijn kop. In deze geïsoleerde tijden was mentale gezondheid nog nooit zo belangrijk! 
                Toch wordt het steeds moeilijker om je gevoelens en frustraties te uitten. Zeker in de online wereld van vandaag.

                Daarom bied ik deze pagina aan in de hoop het iets gemakkelijker te maken deze gevoelens te verwerken.
                Schrijf hier uit wat op je hart ligt, maar je niet kan zeggen.
            </p>
        </>
    );
}
 
export default Header;
