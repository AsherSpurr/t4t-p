import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useState } from 'react';

function App() {
  const [locs, setLocs] = useState([])

  function updateLocs(locs) {
    if(locs) {
      setLocs(locs)
    }
  }
  return (
    <div className="App">
      <header>
        <nav>
          <h1>T4Tp</h1>
          <NavLink></NavLink>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Landing updateLocs={updateLocs} locs={locs}/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/*' element={<Error />}/>
          <Route path='/:locationName' element={<LocDetails />}/>        
        </Routes>
      </main>
    </div>
  );
}

export default App;
