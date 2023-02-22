import Tile from './Tile'

const tiles = [
    {
      "title": "Foundry VTT",
      "link": "https://www.sleepycobbler.com/foundry",
      "thumb":"./logo_foundryvtt.png"
    },
    {
      "title": "Star System Generation",
      "link": "https://www.sleepycobbler.com/spacecore",
      "thumb":"./galaxy.png"
    },
    {
      "title": "Discord & Dragons",
      "link": "https://github.com/sleepycobbler/discord-dragons",
      "thumb":"./logo_dnd_transparent.png"
    },
    {
      "title": "Tic-Tac-Toe",
      "link": "https://www.sleepycobbler.com/ttt",
      "thumb":"./logo_tictactoe.png"
    },
    {
        "title": "Absolver Deckbuilder",
        "link": "https://github.com/sleepycobbler/Absolver",
        "thumb":"./logo_absolver.png"
    }
]

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
