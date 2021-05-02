import styles from "./Layout.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return ( 
        
         <div className={styles.container}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    
     );
}


Layout.propTypes = {
    children : PropTypes.object.isRequired

}

export default Layout;