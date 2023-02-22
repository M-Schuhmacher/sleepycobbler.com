import Intro from './Intro'
import Footer from './Footer'
import './Home.css';
import React from "react"

const Home = () => {
  return (
    <div className="App">
      <div className="Contents">
        <Intro />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
