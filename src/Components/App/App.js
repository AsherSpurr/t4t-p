import { Routes, Route, NavLink } from "react-router-dom";
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
  const [activeFilters, setActiveFilters] = useState([]);

  function updateFilters(filters) {
    // const includesAll = (arr, values) => values.every(v => arr.includes(v))
    // filters.forEach((filter) => {
    //   if (activeFilters.includes(filter)) {
    //     let filtered = activeFilters.filter((aFilter) => aFilter !== filter); //may cause problem if two filters -> can't identify if filter === both
    //     setActiveFilters(filtered);
    //   } else {
    //     setActiveFilters([...activeFilters, filter]);
    //   }
    // });
    setActiveFilters(filters);
    updateLocs(locs);
  }

  function updateLocs(locs) {
    // setActiveFilters(filters);

    // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
    const filtered = locs.filter((loc) => {
      return loc.unisex === true;
    });
    console.log("filter test", filtered);
    console.log("App filters", activeFilters);
    console.log("filter includes unisex", activeFilters.includes("unisex"));
    console.log("filter includes accessible", activeFilters.includes("accessible"));
    // <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

    // if (
    //   includesAll(activeFilters, ['unisex', 'accessible'])
    // ) {
    //   console.log('Includes both = true')
      // const filteredOne = locs.filter((loc) => {
      //   return loc.unisex === true;
      // });
      // const filteredTwo = locs.filter((loc) => {
      //   return loc.accessible === true;
      // });
      // const concatArray = filteredOne.concat(filteredTwo);
      // setFilteredLocs(concatArray);
     if (activeFilters.includes("unisex")) {
      const unisexLocs = locs.filter((loc) => {
        return loc.unisex === true;
      });
      setFilteredLocs(unisexLocs);
    } else if (activeFilters.includes("accessible")) {
      const accessibleLocs = locs.filter((loc) => {
        return loc.accessible === true;
      });
      setFilteredLocs(accessibleLocs);
    } else if (activeFilters.includes("all")) {
      setFilteredLocs(locs);
    } else {
      setFilteredLocs(locs);
      setLocs(locs);
    }
  }

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
                locs={locs}
                filteredLocs={filteredLocs}
                activeFilters={activeFilters}
              />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Error />} />
          <Route
            path="/:locationName"
            element={<LocDetails filteredLocs={filteredLocs} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
