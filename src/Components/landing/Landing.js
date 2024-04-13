import './Landing.css';
import { useState } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'
import { fetchBRsByLoc } from '../../apiCalls';

const Landing = ({ updateLocs, locs }) => {
    //Handle fetch of actual bathrooms here
    //use updateLocs in Landing

    async function handleBRsByLoc(lat, lon, ada, unisex ) {
        try {
            const locations = await fetchBRsByLoc(lat, lon, ada, unisex)
            updateLocs(locations)
        } catch(error) {
            throw error
        }
    }
    return (
        <>
        {/* handle coordinates fetch in search
        use the return to fire the fetch in here to fetch bathrooms */}
            <Search handleBRsByLoc={handleBRsByLoc}/>
            <Filter />
            <Locations locs={locs}/>
        </>
    )
}

export default Landing