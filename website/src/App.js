import './App.css';
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'
import Tile from './Tile'
import React from "react"

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

function App() {
  return (
    <div className="App">
      <div className="Contents">
        <Header />
        <Intro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
