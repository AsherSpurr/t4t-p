import './Landing.css';
import { useState, useEffect } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'
import Map from '../map/Map'
import { fetchBRsByLoc } from '../../apiCalls';
import { useSearchParams } from 'react-router-dom';

const Landing = ({ updateLocs, locs, filteredLocs }) => {
    //Handle fetch of actual bathrooms here
    //use updateLocs in Landing
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    // const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {
//try using if statement to check if lat lon is falsy -> emtpy string is falsy
    const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon)
        .then(data => {
            if(data) {
                updateLocs(data)
                // setSearchParams({'a': 'all'})
            }
        })
    }
        handleBRsByLoc(lat, lon)
    }, [ lat, lon])

    function setLatLonState(lat, lon) {
        setLat(lat)
        setLon(lon)
    }

    return (
        <div className='Landing_wrapper'>
        {/* handle coordinates fetch in search
        use the return to fire the fetch in here to fetch bathrooms */}
            <div className='Landing_left_wrapper'>
                <h2>Where do you want to 'go'?</h2>
                <Search setLatLonState={setLatLonState}/>
                <Filter updateLocs={updateLocs} locs={locs}/>
                <Locations filteredLocs={filteredLocs}/>
            </div>
            <div className='Landing_map_wrapper'>
                <Map />
            </div>
        </div>
    )
}

export default Landing