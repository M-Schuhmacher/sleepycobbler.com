const tiles = [
    {
      "title": "Foundry VTT",
      "link": "https://www.sleepycobbler.com/foundry",
      "thumb":"./logo_foundryvtt.png"
    },
    {
      "title": "Invite Music Bot",
      "link": "https://discordapp.com/oauth2/authorize?client_id=909901585755303957&scope=bot&permissions=36752448",
      "thumb":"./logo_musicbot.png"
    },
    {
      "title": "Discord & Dragons",
      "link": "https://sleepycobbler.com/dnd",
      "thumb":"./logo_dnd_transparent.png"
    },
    {
      "title": "Tic-Tac-Toe",
      "link": "https://sleepycobbler.com/ttt",
      "thumb":"./logo_tictactoe.png"
    },
    {
      "title": "Trivia Time Client",
      "link": "https://sleepycobbler.com/trivia-time",
      "thumb":"./logo_stopwatch.png"
    },
    {
        "title": "Absolver Deckbuilder",
        "link": "https://sleepycobbler.com/absolver",
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