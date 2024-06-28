import React, { useEffect, useRef } from 'react';
//import { Loader } from "@googlemaps/js-api-loader";
import {APIProvider, Map, useMap, AdvancedMarker} from '@vis.gl/react-google-maps';



/* api key AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g   */

export default function SFMap(){
  const mapRef = useRef(null);
  const map = useMap();

      
    useEffect(() => {
      console.log("En useEffect map:"+map);
      if (map) {
        console.log("En useEffect-map");
      

      }
    }, [map]);



  return(
    <div style={{ width: '95vw', height: '100vh' }} ref={mapRef}>

    {/*<APIProvider apiKey="AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g">*/}

       <Map
      defaultZoom={12}
      defaultCenter={ { lat: 37.75, lng: -122.40 } } 
      style={{ width: '100%', height: '100%' }}
      onLoad={map => setMap(map)}
      mapId="FOODTRUCKS"

     >
        <AdvancedMarker position={{ lat: 37.75, lng: -122.40 }} title={'Mexicana'}  />


     </Map>
      {/*</APIProvider>*/}
      </div>

      
  );
}