const Intro = () => (
    <div>
        <div className='About-me-container'>
            <div className='About-me-contents'>
                <div className="max-container"><img id="mah-face" className="my-face" src="./me.jpg"></img></div>
                <div className='hello-paragraph'><h3>Hello!</h3><p>Welcome to my website! A hub for everything I do. Feel free to look around!</p><p>- Max</p></div>
            </div>
        </div>
        <div className="Tile-area">
            <div className="Tile-area-contents">
                {tiles.map((tile) => <Tile title={tile.title} link={tile.link} thumb={tile.thumb} />)}
            </div>
        </div>
    </div>
  )
  
  export default Intro;