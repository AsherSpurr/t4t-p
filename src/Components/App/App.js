import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useEffect, useState } from 'react';
import distance from '../images/distance-blue.svg'
import { useSearchParams, useLocation, useParams } from "react-router-dom";
// import { formatSearchParams } from '../../utils/utils';

function App() {
  const [locs, setLocs] = useState([]);
  const [filteredLocs, setFilteredLocs] = useState([]);
  // const [filters, setFilters] = useState([]);
  const [unisexLocs, setUnisexLocs] = useState([])
  const [accessibleLocs, setAccessibleLocs] = useState([])
  const [adaAndUnisexLocs, setAdaAndUnisexLocs] = useState([])

  // console.log('filters? 1st', filters)
  function updateFilters(filters) {
    //  setFilters(activeFilters);
    // setFilteredLocs()
    // if(filters.length) {
      console.log('filters 2nd', filters)
      if(filters.accessible && filters.unisex) {
        setFilteredLocs(adaAndUnisexLocs)
      }
      if(filters.accessible) {
        setFilteredLocs(accessibleLocs)
      }
      if(filters.unisex) {
        setFilteredLocs(unisexLocs)
      }
      if(filters.all) {
        setFilteredLocs(locs)
      }
    // } 
   
    // updateLocs(locs);
  }

  function updateLocs(locs) {

      setLocs(locs);
      setFilteredLocs(locs);

      const adaFiltered = locs.filter((loc) => {
        return loc.accessible
      })
      setAccessibleLocs(adaFiltered)

      const unisexFiltered = locs.filter((loc) => {
        return loc.unisex
      })
      setUnisexLocs(unisexFiltered)

      const adaAndUnisexFiltered = locs.filter((loc) => {
        return loc.unisex && loc.accessible
      })
      setAdaAndUnisexLocs(adaAndUnisexFiltered)
    }
    console.log('ada', accessibleLocs)
    console.log('unisex', unisexLocs)
    console.log('both', adaAndUnisexLocs)
    console.log('locs', locs)
  // }

  return (
    <div className="App">
      <header className="App_header">
        <nav className="App_nav">
          <div className='App_nav_container'>
            <img className='App_logo'src={distance} alt='' height='25px' width='auto'></img>
            <NavLink to='/' className='App_navlink_home'><h1>T4Tp</h1></NavLink>
          </div>
          <div className='App_about_container'>
            <NavLink to='/About' className='App_navlink_about'>About</NavLink>
          </div>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                adaAndUnisexLocs={adaAndUnisexLocs}
                accessibleLocs={accessibleLocs}
                // setFilters={setFilters}
                setFilteredLocs={setFilteredLocs}
                unisexLocs={unisexLocs}
                updateFilters={updateFilters}
                updateLocs={updateLocs}
                locs={locs}
                filteredLocs={filteredLocs}
                // filters={filters}
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
