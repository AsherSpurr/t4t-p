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
  // const [unisexLocs, setUnisexLocs] = useState([]);
  // const [accessibleLocs, setAccessibleLocs] = useState([]);
  // const [adaAndUnisexLocs, setAdaAndUnisexLocs] = useState([]);


  // const updateFilters = (filters) => {
    // if (filters.all){
    //   setFilteredLocs(locs);
    // } else if (filters.accessible && filters.unisex) {
    //   setFilteredLocs(adaAndUnisexLocs);
    // } else if (filters.accessible) {
    //   setFilteredLocs(accessibleLocs);
    // } else if (filters.unisex) {
    //   setFilteredLocs(unisexLocs);
    // } else {
    //   setFilteredLocs(locs)
    // }
  //   updateLocs(locs, filters)
  // };

  // const updateLocs = (locs) => {
  //   setLocs(locs);
  //   setFilteredLocs(locs);

  //   const adaFiltered = locs.filter((loc) => {
  //     return loc.accessible;
  //   });
  //   setAccessibleLocs(adaFiltered);

  //   const unisexFiltered = locs.filter((loc) => {
  //     return loc.unisex;
  //   });
  //   setUnisexLocs(unisexFiltered);

  //   const adaAndUnisexFiltered = locs.filter((loc) => {
  //     return loc.unisex && loc.accessible;
  //   });
  //   setAdaAndUnisexLocs(adaAndUnisexFiltered);
  // };

  function updateLocs(locs) {
    // const queryParams = formatSearchParams(window.location.href)
    // setParams(queryParams)
  // console.log(params.includes('unisex'))
  const params = window.location.href
  console.log(params)
    if(params.includes('unisex') && params.includes('accessible')) {
      const twoParamLocs = locs.filter((loc) => {
        return loc.unisex === true && loc.accessible === true
      })
      setFilteredLocs(twoParamLocs)
    } else if(params.includes('unisex')) {
        const unisexLocs = locs.filter((loc) => {
          return loc.unisex === true
        })
        setFilteredLocs(unisexLocs)
    } else if(params.includes('accessible')) {
        const accessibleLocs = locs.filter((loc) => {
          return loc.accessible === true
        })
        setFilteredLocs(accessibleLocs)
    } else if(params.includes('all')) {
        setFilteredLocs(locs)
    } else {
        setFilteredLocs(locs)
        setLocs(locs)
    }
  }
  const allLocsCoordinates = locs.reduce((acc, loc) => {
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
                // updateFilters={updateFilters}
                locs={locs}
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
