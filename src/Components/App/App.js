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
  const [locs, setLocs] = useState([])
  const [filteredLocs, setFilteredLocs] = useState([])
  const [activeFilters, setActiveFilters] = useState([])
  // const [paramsS, setParamsS] = useState([])
  // const locName = useParams().locationName;
  // console.log(locName) //console.logging nothing

  useEffect(() => {
    const paramsS = window.location.href
    updateLocs(locs, paramsS)
    
    }, [window.location.href])
    
    
  // const paramsS = formatSearchParams(window.location.href)
  // console.log(paramsS)

  //Tried:
  // - setting the params to state + the function always having access
  // - formatting in App + Filter
  // - passing params as an optional parameter and including it in Filters call 
  // - useLocation (does nothing)
  // -useSearchParams (also dooes nothing)

    function updateLocs(locs, filters) {
      setActiveFilters(filters)
      // console.log('App params', paramsS)
      // console.log('App Locs', filteredLocs)
      const filtered = locs.filter((loc) => {
        return loc.unisex === true
      })
      console.log('map test', filtered)
      console.log('filter includes', filters.includes('unisex'))
 
      if(filters.includes('unisex') && filters.includes('accessible')) {
        const filteredOne = locs.filter((loc) => {
          return loc.unisex === true
        })
        const filteredTwo = locs.filter((loc) => {
          return loc.accessible === true
        })
        const concatArray = filteredOne.concat(filteredTwo)
        setFilteredLocs(concatArray)
      } else if(filters.includes('unisex')) {
          const unisexLocs = locs.filter((loc) => {
            return loc.unisex === true
          })
          setFilteredLocs(unisexLocs)
      } else if(filters.includes('accessible')) {
          const accessibleLocs = locs.filter((loc) => {
            return loc.accessible === true
          })
          setFilteredLocs(accessibleLocs)
      } else if(filters.includes('all')) {
          setFilteredLocs(locs)
      } else {
          setFilteredLocs(locs)
          setLocs(locs)
      }
  }

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
          <Route path='/' element={<Landing updateLocs={updateLocs} locs={locs} filteredLocs={filteredLocs} activeFilters={activeFilters}/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/:locationName' element={<LocDetails filteredLocs={filteredLocs}/>}/>        
        </Routes>
      </main>
    </div>
  );
}

export default App;
