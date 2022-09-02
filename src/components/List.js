import Item from "./Item"
function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
           <Item marca="Ferrari" ano={1985} />
           <Item marca="Unno" ano={1964} />
           <Item marca="Renault" ano={2000}/>
           <Item marca="chevrolet" ano={2010} />
           <Item />
        </ul>
        </>
    )
}

export default List