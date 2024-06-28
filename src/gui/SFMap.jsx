import React, { useEffect, useRef, useState } from 'react';
//import { Loader } from "@googlemaps/js-api-loader";
import {APIProvider, Map, useMap, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

/**
 * Displays a map of the food trucks
 */



export default function SFMap({ftdata}){
  const mapRef = useRef(null);
  const map = useMap();
  const [draw, setDraw] = useState([])

      
    useEffect(() => {
      console.log("En useEffect map:"+map);
      if (map) {
        console.log("En useEffect-map");
      
        ftdata.forEach(ft => {
          //console.log("----"+ft.applicant);
          
        });
        setDraw(ftdata);
      }
    }, [map]);

    const customMarkerIcon = {
      url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // URL to the custom marker icon
      scaledSize: { width: 40, height: 40 } // Size of the custom marker icon
    };

  return(
    <div>
      <h3>FoodTrucks</h3>
    <div>
      <span className="typeFood" style={{ color: '#00ff00'}}>Mexican</span>
      <span className="typeFood" style={{ color: '#ff0000'}}>American</span>
      <span className="typeFood" style={{ color: '#0000ff'}}>Italian</span>
      <span className="typeFood" style={{ color: '#ff00ff'}}>Coffe/Dessert</span>
      <span className="typeFood" style={{ color: '#00ffff'}}>Other</span>
    </div>
    <div style={{ width: '99%', height: '85vh' }} ref={mapRef}>


       <Map
      defaultZoom={12}
      defaultCenter={ { lat: 37.75, lng: -122.40 } } 
      style={{ width: '100%', height: '100%' }}
      onLoad={map => setMap(map)}
      mapId="FOODTRUCKS"

     >
        {/*<AdvancedMarker position={{ lat: 37.75, lng: -122.40 }} title={'Mexicana'}><Pin background={'#ffff00'} /></AdvancedMarker>*/}
        {draw&& draw.map((ft)=><AdvancedMarker key={ft.objectid} position={{ lat: Number(ft.location.latitude) , lng: Number(ft.location.longitude) }} title={ft.applicant}><Pin background={ft.color} /></AdvancedMarker>) }

     </Map>
      {/*</APIProvider>*/}
      </div>
      </div>
      
  );
}