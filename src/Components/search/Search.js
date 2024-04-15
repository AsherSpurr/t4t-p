import './Search.css';
import { useState } from 'react'
import { useEffect } from 'react';
import { fetchLatLon } from '../../apiCalls';



const Search = ({ setLatLonState}) => {

    const [num, setNum] = useState('')
    const [street, setStreet] = useState('')
    const [streetIdent, setStreetIdent] = useState('')
    const [town, setTown] = useState('')
    const [state, setState] = useState('')
    const key = process.env.REACT_APP_GOOGLE

        const fetchLatLonSearch = (e, num, street, streetIdent, town, state, key) => {
            e.preventDefault()
            fetchLatLon(num, street, streetIdent, town, state, key)
            .then(data => {
                if(data) {
                    // console.log(data)
                setLatLonState(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
                }
            })
        }

    return (
        <div className='Search_div_container'>
            {/* <h2>Where do you want to 'go'?</h2> */}
            <form className='Search_form'>
                {/* <input className='Search_input' id='Search_lat_input' type='text' placeholder='Latitude'  name='lat' value={lat} onChange={(e) => setLat(e.target.value)}></input>
                <input className='Search_input' id='Search_lon_input' type='text' placeholder='Longitude'  name='lon' value={lon} onChange={(e) => setLon(e.target.value)}></input> */}
                <input className='Search_input' type='text' placeholder='Street number' name='num' value={num} onChange={(e) => setNum(e.target.value)}></input>
                <input className='Search_input' type='text' placeholder='Street' name='street' value={street} onChange={(e) => setStreet(e.target.value)}></input>
                <input className='Search_input' type='text' placeholder='Street identifier' name='streetIdent' value={streetIdent} onChange={(e) => setStreetIdent(e.target.value)}></input>
                <input className='Search_input' type='text' placeholder='Town' name='town' value={town} onChange={(e) => setTown(e.target.value)}></input>
                <input className='Search_input' type='text' placeholder='State two digit' name='state' value={state} onChange={(e) => setState(e.target.value)}></input>
                <button className='Search_button' type='submit' onClick={(e) => fetchLatLonSearch(e, num, street, streetIdent, town, state, key)}>Search</button>
            </form>
        </div>
    )
}

export default Search