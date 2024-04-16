import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useEffect, useState } from 'react';
import distance from '../images/distance-blue.svg'
import { useSearchParams, useLocation } from "react-router-dom";

function App() {
  const [locs, setLocs] = useState([])
  const [filteredLocs, setFilteredLocs] = useState(locs)
  const [searchParams] = useSearchParams()
  const location = useLocation()
  // const query = location.search
  console.log(location.search)

  function updateLocs(locs) {
    // console.log(location.search)
    // const query = searchParams.get('a')
      const query = location.search

    if(query !== 'all' && query !== '') {
      const filteredLocs = locs.filter((loc) => {
        return loc[query] === true
      })
      console.log(filteredLocs)
      setFilteredLocs(filteredLocs)
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
          <Route path='/:locationName' element={<LocDetails />}/>        
        </Routes>
      </main>
    </div>
  );
}

export default App;
