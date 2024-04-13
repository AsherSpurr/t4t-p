import './Search.css';
import { useState } from 'react'
import { useEffect } from 'react';



const Search = ({ setLatLonState}) => {
    //Use google api to fetch -> then set state based off that fetch
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    //Convert to integers

    console.log(typeof(lon))

    // useEffect(() => {
    //     setLatLonState(lat, lon)
    // }, [lat, lon, setLatLonState])

    function wrapper(e) {
        e.preventDefault()
        setLatLonState(lat, lon)
    }

    return (
        <div className='Search_div_container'>
            <form className='Search_form'>
                <input className='Search_input' id='Search_lat_input' type='text' placeholder='Latitude'  name='lat' value={lat} onChange={(e) => setLat(e.target.value)}></input>
                <input className='Search_input' id='Search_lon_input' type='text' placeholder='Longitude'  name='lon' value={lon} onChange={(e) => setLon(e.target.value)}></input>
                <button className='Search_button' type='submit' onClick={(e) => wrapper(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search