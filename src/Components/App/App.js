import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useEffect, useState } from 'react';
import distance from '../images/distance-blue.svg'
import { useLocation, useSearchParams } from "react-router-dom";

function App() {
  const [locs, setLocs] = useState([])
  const [filterParam, setFilterParam] = useState([])
  const [filteredLocs, setFilteredLocs] = useState(locs)
  const [searchParams] = useSearchParams()

  function updateLocs(locs) {
    //include URL + param as arguments
    //will need to use useLocation to get URL in other files
    //if url includes param
    //filter locs based off that param
    //params = all -> don't filter and return all
    //params = unisex -> filter for unisex return that
    //etc
    if(locs) {
      setLocs(locs)
      // setFilteredLocs(locs)
    }
  }

  useEffect(() => {
    console.log(searchParams.get('a'))
  }, [])

  function filterLocs(param) {
    setFilterParam([...filterParam, param])
    const filteredLocs = locs.filter((loc) => {
      return loc[param] === true
    })
    console.log(filteredLocs)
    setLocs(filteredLocs)
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
          <Route path='/' element={<Landing updateLocs={updateLocs} locs={locs} filterLocs={filterLocs}/>}/>
            {/* <Route path='/all?/accessible?/unisex?' element={<Landing updateLocs={updateLocs} locs={locs} filterLocs={filterLocs}/>}/> 
           </Route> */}
          <Route path='/About' element={<About />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/:locationName' element={<LocDetails />}/>        
        </Routes>
      </main>
    </div>
  );
}

export default App;
