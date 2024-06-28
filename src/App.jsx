import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import animation from './assets/foodtruck-small.gif';
import './App.css';
import {FoodTruckInfo} from './controllers/FoodTruckInfo';
import SFMap from './gui/SFMap';

import {APIProvider} from '@vis.gl/react-google-maps';


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
     <APIProvider apiKey={'AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g'} onLoad={() => console.log('Maps API has loaded.')}>

      {screen==="loading"&&<>
        <div>
          <img src={animation} className="logo" alt="React logo" />
        </div>
        <h2>Loading...</h2>
      </>
      }
      {screen==="error"&&<div>
        <span>Error</span>
      </div>}
      {screen==="map"&&<div>
        <SFMap  />
      </div>}
      <div>

        
          
        
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </APIProvider>
  )
}

export default App
