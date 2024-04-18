import './Search.css';
import { useState } from 'react'
import { fetchLatLon } from '../../apiCalls';
import searchsvg from '../images/search.svg'

const Search = ({ setLatLonState }) => {

    const [street, setStreet] = useState('')
    const [town, setTown] = useState('')
    const [state, setState] = useState('')

    const key = process.env.REACT_APP_GOOGLE

        const fetchLatLonSearch = (e, street, town, state, key) => {
            e.preventDefault()
            fetchLatLon(street, town, state, key)
            .then(data => {
                if(data) {
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
                <input className='Search_input' id='Input_one' type='text' placeholder='Street address' name='street' value={street} onChange={(e) => setStreet(e.target.value)}></input>
                {/* <input className='Search_input' type='text' placeholder='Street' name='street' value={street} onChange={(e) => setStreet(e.target.value)}></input>
                <input className='Search_input' type='text' placeholder='Street identifier' name='streetIdent' value={streetIdent} onChange={(e) => setStreetIdent(e.target.value)}></input> */}
                <input className='Search_input' id='Input_two' type='text' placeholder='Town' name='town' value={town} onChange={(e) => setTown(e.target.value)}></input>
                <input className='Search_input' id='Input_three' type='text' placeholder='State' name='state' value={state} onChange={(e) => setState(e.target.value)}></input>
                <button className='Search_button' type='submit' onClick={(e) => fetchLatLonSearch(e, street, town, state, key)}><img className='Search_icon' src={searchsvg} alt=''></img></button>
            </form>
        </div>
    )
}


export default Search