import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import About from '../about/About'
import Landing from '../landing/Landing'
import Error from '../error/Error'
import LocDetails from '../locDetails/LocDetails'
import { useEffect } from 'react';
import { fetchBRsByLocNoParams } from '../../apiCalls';


function App() {
  const lat = 39.753604
  const lon = -104.428580
  useEffect(() => {
      fetch()
    }, [])
   async function fetch() {
    try {
      const tryFetch = await fetchBRsByLocNoParams(lat, lon)
      console.log(tryFetch)
    } catch(error) {
      throw error
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
        {/* <Routes>
          <Route to='/' element={<Landing />}/>
          <Route to='/About' element={<About />}/>
          <Route to='/*' element={<Error />}/>
          <Route to='/:locationName' element={<LocDetails />}/>        
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
