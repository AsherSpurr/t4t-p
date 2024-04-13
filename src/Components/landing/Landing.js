import './Landing.css';
import { useState, useEffect } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'
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
            <Search setLatLonState={setLatLonState}/>
            <Filter />
            <Locations locs={locs}/>
        </div>
    )
}

export default Landing