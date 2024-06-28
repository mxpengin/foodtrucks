import React, { useEffect, useRef } from 'react';
//import { Loader } from "@googlemaps/js-api-loader";
import {APIProvider, Map, useMap, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';


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

    const customMarkerIcon = {
      url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', // URL to the custom marker icon
      scaledSize: { width: 40, height: 40 } // Size of the custom marker icon
    };

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
        <AdvancedMarker position={{ lat: 37.75, lng: -122.40 }} title={'Mexicana'}><Pin background={'#ffff00'} /></AdvancedMarker>


     </Map>
      {/*</APIProvider>*/}
      </div>

      
  );
}