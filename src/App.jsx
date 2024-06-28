import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import animation from './assets/foodtruck-small.gif';
import './App.css';
import {FoodTruckInfo} from './controllers/FoodTruckInfo';
import SFMap from './gui/SFMap';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';

/**
 * Loads information 
 * Once the list of FT is loaded, the map is displayed
 */

function App() {
  const [count, setCount] = useState(0)
  const [screen, setScreen] = useState("loading");   // possible values ; ["loading","error","map"]
  const [foodTruckData, setFoodTruckData] = useState([]);

  useEffect(() =>{
    async function init(){
      const ftdata = await FoodTruckInfo();
      if( typeof(ftdata) === 'object' ){
        setFoodTruckData(ftdata);
        setScreen("map");
      }else{
        setScreen("error");
      }
    }
    init();

  },[]);


  return (
     <>
      {screen==="loading"&&<>
        <div>
          <img src={animation} className="logo"  />
        </div>
        <h2>Loading...</h2>
      </>
      }
      {screen==="error"&&<div>
        <span>Error</span>
      </div>}
      {screen==="map"&&<div>
        <APIProvider apiKey="">
          <SFMap ftdata={foodTruckData} />
        </APIProvider>
      </div>}
    </>
  )
}

export default App
