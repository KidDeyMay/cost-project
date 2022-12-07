import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from './../../img/Apple_logo_black.svg.png'

function Navbar(){
        return(
         <nav class={styles.navbar}>
        <Container>
        <Link to="/">
                <img src={logo} alt='costs'/> 
                </Link>
           <ul class={styles.list}>
            <li>
            <Link to="/">Home</Link> </li>

            <li>
            <Link to="/contact">Contact</Link> </li>
            <li>
            <Link to="/company">Company</Link> </li>
            <li>
            <Link to="/newproject">Novo Projeto</Link>
            </li>
           </ul>
          </Container>
        </nav>
    )   
}

export default Navbar