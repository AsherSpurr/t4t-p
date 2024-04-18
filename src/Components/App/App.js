import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import About from "../about/About";
import Landing from "../landing/Landing";
import Error from "../error/Error";
import LocDetails from "../locDetails/LocDetails";
import { useState } from "react";
import distance from "../images/distance-blue.svg";

function App() {
  const [locs, setLocs] = useState([]);
  const [filteredLocs, setFilteredLocs] = useState([]);
  const [unisexLocs, setUnisexLocs] = useState([]);
  const [accessibleLocs, setAccessibleLocs] = useState([]);
  const [adaAndUnisexLocs, setAdaAndUnisexLocs] = useState([]);

  const location = useLocation().pathname
  console.log(filteredLocs)

  const updateFilters = (filters) => {
    if (filters.accessible && filters.unisex) {
      setFilteredLocs(adaAndUnisexLocs);
    }
     else if (filters.accessible) {
      setFilteredLocs(accessibleLocs);
    }
    else if (filters.unisex) {
      setFilteredLocs(unisexLocs);
    }
    else {
      setFilteredLocs(locs);
    }
  };

  const updateLocs = (locs) => {
    setLocs(locs);
    setFilteredLocs(locs);

    const adaFiltered = locs.filter((loc) => {
      return loc.accessible;
    });
    setAccessibleLocs(adaFiltered);

    const unisexFiltered = locs.filter((loc) => {
      return loc.unisex;
    });
    setUnisexLocs(unisexFiltered);

    const adaAndUnisexFiltered = locs.filter((loc) => {
      return loc.unisex && loc.accessible;
    });
    setAdaAndUnisexLocs(adaAndUnisexFiltered);
  };

  return (
    <div className="App">
      <header className="App_header">
        <nav className="App_nav">
          <div className="App_nav_container">
            <img
              className="App_logo"
              src={distance}
              alt=""
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
                updateFilters={updateFilters}
                updateLocs={updateLocs}
                filteredLocs={filteredLocs}
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
