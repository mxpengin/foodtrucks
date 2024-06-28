import React, { useEffect, useRef } from 'react';
//import { Loader } from "@googlemaps/js-api-loader";
import {APIProvider, Map} from '@vis.gl/react-google-maps';



/* api key AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g   */

export default function SFMap(){
  const mapRef = useRef(null);

  useEffect(() => {

      


      /*if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 37.75, lng: -122.41 }, // Coordinates for San Francisco
          zoom: 12,
          mapId: "FOODTRUCKS", 
        });*/
/*
        ftdata.forEach(ft => {
          if(( typeof(ft.location.latitude) === 'number' )&&( typeof(ft.location.longitude ) === 'number' )&&( typeof(ft.applicant) === 'string' )){
            const marker = new google.maps.marker.AdvancedMarkerElement({
              map,
              position: { lat: ft.location.latitude , lng: ft.location.longitude },
              title: ft.applicant,
            });  
          }      
        });
*/

   /*   }
    };*/

    // Ensure the Google Maps API is available
    /*if (window.google && window.google.maps) {
      initMap();
    } else {
      // Load the Google Maps script if it's not already loaded
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    }*/
    

  }, []);





  return(
    <div style={{ width: '100vw', height: '100vh' }} ref={mapRef}>

    <APIProvider apiKey="AIzaSyCiYftJxB-6IAs1JryhxvSVRwvq2rsgY8g">

       <Map
      defaultZoom={13}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } } 
      style={{ width: '100%', height: '100%' }}

     ></Map>
      </APIProvider>
      </div>

      
  );
}