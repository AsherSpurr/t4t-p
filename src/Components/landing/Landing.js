import "./Landing.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import Locations from "../locations/Locations";
import Map from "../map/Map";
import { fetchBRsByLoc } from "../../apiCalls";
import LoadingContext from "../../LoadingContext";

const Landing = ({ updateLocs, filteredLocs, updateFilters,}) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isLoading, setIsLoading] = useState("loading");
  const [brError, setBrError] = useState('')
  const navigate = useNavigate()

  //Note on useEffect -> can also hand control over fetch to Search and remove useEffect.
  //This works just as well, it just depends on which makes more sense
  // useEffect(() => {
  //   if (lat && !brError) {
      const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon).then((data) => {
          if (data.ok) {
            setIsLoading("");
            updateLocs(data);
            console.log('shit')
          } else {
            setBrError('There seems to be an issue fetching')
            navigate('*', {replace: false}, {state: {error: brError}})
          }
        })
        .catch(error => {
          setBrError(error.message)
        })
      };
      // handleBRsByLoc(lat, lon);
  //   }
  // }, [lat, lon, brError]);

  const setLatLonState = (lat, lon) => {
    setLat(lat);
    setLon(lon);
  }

  return (
    <LoadingContext.Provider value={isLoading}>
      <div className="Landing_wrapper">
        <div className="Landing_left_wrapper">
          <h2 className="Landing_h2">Where do you want to 'go'?</h2>
          <Search setLatLonState={setLatLonState} handleBRsByLoc={handleBRsByLoc} />
          <Filter updateFilters={updateFilters}/>
          <Locations filteredLocs={filteredLocs} isLoading={isLoading} />
        </div>
        <div className="Landing_map_wrapper">
          <Map />
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default Landing;
