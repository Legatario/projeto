import Button from "./eventos/Button"

function Evento({numero}){
    function meuEvento(){
        console.log(`Ativar!!! ${numero}`)
    }
function segundoEvento(){
    console.log("segundo evento")
}    
    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button text="Primeiro Evento" event={meuEvento} />
            <Button text="Segundo Evento" event={segundoEvento} />
            
        </div>
    )
}

export default Evento