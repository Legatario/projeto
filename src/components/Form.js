import { useState } from 'react'

function Form(){
    const[name, setName] = useState()
    const[password, setPassword] = useState()

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Digte seu Nome" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Digte sua senha" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form