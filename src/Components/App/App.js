import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import About from "../about/About";
import Landing from "../landing/Landing";
import Error from "../error/Error";
import LocDetails from "../locDetails/LocDetails";
import { useState } from "react";
import distance from "../images/distance-dark-coral.svg";

function App() {
  const [locs, setLocs] = useState([]);
  const [filteredLocs, setFilteredLocs] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    accessible: false,
    unisex: false,
    all: false,
  });

  const handleFormChange = () => {
    updateLocs(locs);
  };

  function updateLocs(locs) {
    if (activeFilters.all) {
      setFilteredLocs(locs);
    } else if (activeFilters.unisex && activeFilters.accessible) {
      const twoParamLocs = locs.filter((loc) => {
        return loc.unisex === true && loc.accessible === true;
      });
      setFilteredLocs(twoParamLocs);
    } else if (activeFilters.unisex) {
      const unisexLocs = locs.filter((loc) => {
        return loc.unisex === true;
      });
      setFilteredLocs(unisexLocs);
    } else if (activeFilters.accessible) {
      const accessibleLocs = locs.filter((loc) => {
        return loc.accessible === true;
      });
      setFilteredLocs(accessibleLocs);
    } else {
      setFilteredLocs(locs);
      setLocs(locs);
    }
  }

  const allLocsCoordinates = filteredLocs.reduce((acc, loc) => {
    acc.push({
      lat: loc.latitude,
      lng: loc.longitude,
    });
    return acc;
  }, []);

  return (
    <div className="App">
      <header className="App_header">
        <nav className="App_nav">
          <div className="App_nav_container">
            <img
              className="App_logo"
              src={distance}
              alt="Blue location pin"
              height="25px"
              width="auto"
            ></img>
            <NavLink to="/" className="App_navlink_home">
              <h1>T4Tp</h1>
            </NavLink>
          </div>
          <div className="App_about_container">
            <NavLink to="/About" className="App_navlink_about">
              About
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                handleFormChange={handleFormChange}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                updateLocs={updateLocs}
                filteredLocs={filteredLocs}
                allLocsCoordinates={allLocsCoordinates}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/locations/:locationName"
            element={<LocDetails filteredLocs={filteredLocs} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
