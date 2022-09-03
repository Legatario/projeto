import Eventos from '../components/Eventos'
import HelloWord from '../components/HelloWord'
import SeuNome from '../components/SeuNome'
import Saudacao from '../components/Saudacao'
import { useState } from 'react'

function Home(){
    const [nome, setNome] = useState()
    return(
        <div>
            <h1>Home</h1>
            <p>Conteúdo da página</p>
            <HelloWord />
            <Eventos numero={1}/>
            <SeuNome setNome={setNome}/>
            <Saudacao nome={nome}/>
        </div>
    )
}

export default Home