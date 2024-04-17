import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useEffect, useState } from 'react';
import distance from '../images/distance-blue.svg'
import { useSearchParams, useLocation } from "react-router-dom";
import { formatSearchParams } from '../../utils/utils';

function App() {
  const [locs, setLocs] = useState([])
  const [filteredLocs, setFilteredLocs] = useState([])
  const [params, setParams] = useState([])
 
  // useEffect(() => {

  //   const queryParams = formatSearchParams(window.location.href)
  //   setParams(queryParams)
  //   console.log(queryParams)
  //   // updateLocs(locs)
    
  //   }, [filteredLocs])
    
    
    function updateLocs(locs) {
      const queryParams = formatSearchParams(window.location.href)
      setParams(queryParams)
    // console.log(params.includes('unisex'))
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

  return (
    <div className="App">
      <header className="App_header">
        <nav className="App_nav">
          <img src={distance} alt=''></img>
          <NavLink to='/' className='App_navlink_home'><h1>T4Tp</h1></NavLink>
          <NavLink to='/About' className='App_navlink_about'>About</NavLink>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing updateLocs={updateLocs} locs={locs} filteredLocs={filteredLocs}/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/:locationName' element={<LocDetails filteredLocs={filteredLocs}/>}/>        
        </Routes>
      </main>
    </div>
  );
}

export default App;
