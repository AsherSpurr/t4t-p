import './Landing.css';
import { useState, useEffect } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'
import Map from '../map/Map'
import { fetchBRsByLoc } from '../../apiCalls';

const Landing = ({ updateLocs, locs }) => {
    //Handle fetch of actual bathrooms here
    //use updateLocs in Landing
    const [lat, setlat] = useState('')
    const [lon, setlon] = useState('')
    
    useEffect(() => {
    async function handleBRsByLoc(lat, lon) {
        try {
            const locations = await fetchBRsByLoc(lat, lon)
            updateLocs(locations)
        } catch(error) {
            throw error
        }
    }
        handleBRsByLoc(lat, lon)
    }, [ lat, lon ])

    function setLatLonState(lat, lon) {
        setlat(lat)
        setlon(lon)
    }

    return (
        <div className='Landing_wrapper'>
        {/* handle coordinates fetch in search
        use the return to fire the fetch in here to fetch bathrooms */}
            <div className='Landing_left_wrapper'>
                <h2>Where do you want to 'go'?</h2>
                <Search setLatLonState={setLatLonState}/>
                <Filter />
                <Locations locs={locs}/>
            </div>
            <div className='Landing_map_wrapper'>
                <Map />
            </div>
        </div>
    )
}

export default Landing