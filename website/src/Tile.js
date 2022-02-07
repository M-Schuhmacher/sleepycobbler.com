function Tile(props) {
    return (
    <div className='Tile-container'>
        <div className='Tile-contents'>
            <a href={props.link}><img src={props.thumb}></img><h3>{props.title}</h3></a>
        </div>
    </div>
    )
}
  
  export default Tile;