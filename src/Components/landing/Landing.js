import "./Landing.css";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import Locations from "../locations/Locations";
// import Map from "../map/Map";
import { fetchBRsByLoc } from "../../apiCalls";
import LoadingContext from "../../LoadingContext";
// import { useLoadScript, GoogleMap, GoogleMapsMarkerClusterer, Marker } from '@react-google-maps/api';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const Landing = ({ updateLocs, filteredLocs, updateFilters, mapContainerClassName, center, zoom}) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isLoading, setIsLoading] = useState("loading");

  const latS = JSON.parse(sessionStorage.getItem('lat'))
  const lonS = JSON.parse(sessionStorage.getItem('lon'))

  const navigate = useNavigate()

  useEffect(() => {
    if(lat) {
      const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon).then((data) => {
          if (data.length) {
            sessionStorage.setItem('locations', JSON.stringify(data))
            const locs = JSON.parse(sessionStorage.getItem('locations'))
            console.log(locs)
            setIsLoading("");
            updateLocs(locs);
          } else {
            console.log(data)
            const {status, statusText} = data
            navigate('*',{state: {status: status, statusText: statusText}})
          }
        })
      };
      handleBRsByLoc(lat, lon);
    }
  }, [lat, lon]);

  const setLatLonState = () => {
    setLat(latS);
    setLon(lonS);
  }
// console.log(latS)
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE,
  // });
  // const position = useMemo(() => ({ lat: latS, lng: lonS}), []);
const position = {lat: 61.2176, lng: -149.8997}

  return (
    <LoadingContext.Provider value={isLoading}>
      <div className="Landing_wrapper">
        <div className="Landing_left_wrapper">
          <h2 className="Landing_h2">Where do you want to 'go'?</h2>
          <Search setLatLonState={setLatLonState}/>
          <Filter updateFilters={updateFilters}/>
          <Locations filteredLocs={filteredLocs} isLoading={isLoading} />
        </div>
        <div className="Landing_map_wrapper">
        {/* {!isLoaded ? (
        <h1>Loading...</h1>
        ) : ( */}
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
          <Map center={position} zoom={10}>
            <Marker position={position} />
          </Map>
        </APIProvider>
        {/* )} */}
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default Landing;
