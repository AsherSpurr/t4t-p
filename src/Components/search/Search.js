import './Search.css';
import { useState } from 'react'
import { useEffect } from 'react';
import { fetchBRsByLocNoParams } from '../../apiCalls';


const Search = () => {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    // const lat = 39.753604
    // const lon = -104.428580
    // useEffect(() => {
    //     fetch()
    //   }, [])
    //  async function fetch() {
    //   try {
    //     const tryFetch = await fetchBRsByLocNoParams(lat, lon)
    //     console.log(tryFetch)
    //   } catch(error) {
    //     throw error
    //   }
    //  }

    return (
        <div>
            <input></input>
        </div>
    )
}

export default Search