import './MobileHome.css';
import { PanelData } from '../../config';
import React from "react"
import { Panel } from '../../components/Panel/Panel';

const Home = () => {
   return (
      <div>
         {PanelData().map(data => { return <Panel {...data} key={data.name} /> })}
      </div>
   );
};

export default Home;