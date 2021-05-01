import styles from "./Layout.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return ( 
        
         <div className={styles.container}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    
     );
}
 
