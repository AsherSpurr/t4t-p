import './Landing.css';
import { useState } from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Locations from '../locations/Locations'

const Landing = ({ updateLocs, locs }) => {

    return (
        <>
            <Search updateLocs={updateLocs}/>
            <Filter />
            <Locations locs={locs}/>
        </>
    )
}

export default Landing