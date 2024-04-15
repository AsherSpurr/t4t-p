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
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [ada, setAda] = useState('')
    const [unisex, setUnisex] = useState('')
    
    useEffect(() => {
    const handleBRsByLoc = (lat, lon, ada , unisex) => {
        fetchBRsByLoc(lat, lon, ada, unisex)
        .then(data => {
            if(data) {
                console.log(data)
                updateLocs(data)
            }
        })
    }
        handleBRsByLoc(lat, lon, ada, unisex)
    }, [ lat, lon ])

    function setLatLonState(lat, lon) {
        setLat(lat)
        setLon(lon)
    }

    function setParamsState(ada, unisex) {
        setAda(ada)
        setUnisex(unisex)
    }

    return (
        <div className='Landing_wrapper'>
        {/* handle coordinates fetch in search
        use the return to fire the fetch in here to fetch bathrooms */}
            <div className='Landing_left_wrapper'>
                <h2>Where do you want to 'go'?</h2>
                <Search setLatLonState={setLatLonState}/>
                <Filter setParamsState={setParamsState}/>
                <Locations locs={locs}/>
            </div>
            <div className='Landing_map_wrapper'>
                <Map />
            </div>
        </div>
    )
}

export default Landing