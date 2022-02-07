import './App.css';
import Header from './Header'
import Intro from './Intro'
import Footer from './Footer'
import Tile from './Tile'
import React from "react"

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
