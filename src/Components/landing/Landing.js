import "./Landing.css";
import { useState, useEffect } from "react";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import Locations from "../locations/Locations";
import Map from "../map/Map";
import { fetchBRsByLoc } from "../../apiCalls";
import LoadingContext from "../../LoadingContext";

const Landing = ({ updateLocs, locs, filteredLocs, activeFilters }) => {
  //Handle fetch of actual bathrooms here
  //use updateLocs in Landing
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isLoading, setIsLoading] = useState("loading");

  //Note on useEffect -> can also hand control over fetch to Search and remove useEffect.
  //This works just as well, it just depends on which makes more sense
  useEffect(() => {
    if (lat) {
      const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon).then((data) => {
          if (data) {
            setIsLoading("");
            updateLocs(data, activeFilters);
          }
        });
      };
      handleBRsByLoc(lat, lon);
    }
  }, [lat, lon]);

  function setLatLonState(lat, lon) {
    setLat(lat);
    setLon(lon);
  }

  return (
    <LoadingContext.Provider value={isLoading}>
      <div className="Landing_wrapper">
        <div className="Landing_left_wrapper">
          <h2 className="Landing_h2">Where do you want to 'go'?</h2>
          <Search setLatLonState={setLatLonState} />
          <Filter updateLocs={updateLocs} locs={locs} />
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
