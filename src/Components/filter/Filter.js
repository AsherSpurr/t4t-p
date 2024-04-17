import './Filter.css';
import { formatSearchParams } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Filter = ({ updateLocs, locs }) => {
    const [activeFilters, setActiveFilters] = useState([])

    // let url = new URL('https://localhost:3000/?')
    // let params = new URLSearchParams(url.search)

    // function checkParams(e, value) {
    //     e.preventDefault()
    // if(params.has('b', value) ){
    //     params.delete('b', value)
    // } 
    // else if(params.has('b', 'accessible') && value === 'all'){
    //    params.set('b', 'all')
    // } 
    // else if(params.has('b', 'unisex') && value === 'all') {
    //     params.set('b', 'all')
    // } 
    // else if(params.has('b', 'all') && value === 'accessible') {
    //     params.delete('b', 'all')
    // } 
    // else if(params.has('b', 'all') && value === 'unisex') {
    //     params.delete('b', 'all')
    // } 
    // else {
    //     params.append('b', value)
    // }
    //    window.history.replaceState(value, "", params)
    // //    const paramsS = window.location.href
    // //       updateLocs(locs, paramsS)

    //    console.log('windowLoc', window.location.href)
    //    //    console.log(window.location.href = params)
     
    // }

    // const handleLocUpdate = () => {
    //     updateLocs(locs)
    // }

    const handleChange = (e) => {
        const filterId = e.id
        if(e.checked) {
            setActiveFilters([...activeFilters, filterId])
        } else {
            let filtered = activeFilters.filter((filter) => filter !== filterId)
            setActiveFilters(filtered)
        }
       updateLocs(locs, activeFilters)
    }
    console.log('active filters', activeFilters)

    return (
        <form className='Filter_div_wrapper' onChange={(e) => handleChange(e.target)}>
            {/* <div> */}
                <input type='checkbox' className='Filter_input' id='accessible'/>
                <label for='accessible'>Accessible</label>
            {/* </div>
            <div> */}
                <input type='checkbox' className='Filter_input' id='unisex'/>
                <label for='unisex'>Unisex</label>
            {/* </div>
            <div> */}
                <input type='checkbox' className='Filter_input' id='all'/>
                <label for='all'>All</label>
            {/* </div>        */}
        </form>
    )
    //Accessability note/ maybe hot fix? -> buttons should be wrapped in form -> buttonType = checkbox
}

export default Filter