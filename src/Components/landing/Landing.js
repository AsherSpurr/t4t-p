import './Landing.css';
import { useState, useEffect } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'
import Map from '../map/Map'
import { fetchBRsByLoc } from '../../apiCalls';
import { useNavigate } from 'react-router-dom';

const Landing = ({ updateLocs, locs, filterLocs }) => {
    //Handle fetch of actual bathrooms here
    //use updateLocs in Landing
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const navigate = useNavigate()
    useEffect(() => {

    const handleBRsByLoc = (lat, lon) => {
        fetchBRsByLoc(lat, lon)
        .then(data => {
            if(data) {
                // console.log(data)
                updateLocs(data)
                // navigate('?all', {replace: false})
            }
        })
    }
        handleBRsByLoc(lat, lon)
    }, [ lat, lon])

    function setLatLonState(lat, lon) {
        setLat(lat)
        setLon(lon)
    }

    // function setParamsState(ada, unisex) {
    //     setAda(ada)
    //     setUnisex(unisex)
    // }

    return (
        <div className='Landing_wrapper'>
        {/* handle coordinates fetch in search
        use the return to fire the fetch in here to fetch bathrooms */}
            <div className='Landing_left_wrapper'>
                <h2>Where do you want to 'go'?</h2>
                <Search setLatLonState={setLatLonState}/>
                <Filter updateLocs={updateLocs} filterLocs={filterLocs}/>
                <Locations locs={locs}/>
            </div>
            <div className='Landing_map_wrapper'>
                <Map />
            </div>
        </div>
    )
}

// sessionStorage.setItem('adaS', JSON.stringify(ada))
// const adaS = sessionStorage.getItem('adaS')
// const parsedAdaS = JSON.parse(adaS)
// setAda(parsedAdaS)

// sessionStorage.setItem('unisexS', JSON.stringify(unisex))
// const unisexS = sessionStorage.getItem('unisexS')
// const parsedUnisexS = JSON.parse(unisexS)
// setUnisex(parsedUnisexS)

export default Landing