import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import saving from './../../img/save.jpg'

import style from './Home.module.css'

function Home(){
    return(
            <section className={style.home_container}>
                <h1>Bem vindo a o <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar Projeto"/>  
                <img src={saving} alt="aa"/> 
            </section>
    )
}

export default Home