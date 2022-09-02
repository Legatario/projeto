import {useState} from 'react'
function Condicional(){
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log('deu certo')
        setUserEmail(email)
       
    }
    function limparEmail(e){
       setUserEmail('')
       
    }

    return(
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
            <input  type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviarEmail}>Enviar E-mail</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional