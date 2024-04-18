import './Filter.css';
import { formatSearchParams } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const Filter = ({ updateLocs, locs, setFilters, updateFilters }) => {
    const [activeFilters, setActiveFilters] = useState({
        accessible: false,
        unisex: false,
        all: false
    })

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
    
    const handleChange = (e) => {
        // const filterId = e.target.id
        // if(e.target.checked) {
            setActiveFilters({...activeFilters, [e.target.name]: e.target.checked})
        // } else {
        //     setActiveFilters({...activeFilters, [e.target.name]: e.target.checked})
        // }
        //    setFilters(activeFilters)
        setTimeout(handleLocUpdate, 1000)
        //    updateFilters()
        // updateFilters(activeFilters)
    }
    const filterParam = activeFilters

    const handleLocUpdate = () => {
        updateFilters(filterParam)
    }
    // console.log('active filters', activeFilters)

    return (
        <form className='Filter_div_wrapper' >
            {/* <div> */}
                <input type='checkbox' className='Filter_input' id='accessible' name='accessible' value={activeFilters.accessible} onChange={(e) => handleChange(e)}/>
                <label for='accessible'>Accessible</label>
            {/* </div>
            <div> */}
                <input type='checkbox' className='Filter_input' id='unisex'name='unisex' value={activeFilters.unisex} onChange={(e) => handleChange(e)}/>
                <label for='unisex'>Unisex</label>
            {/* </div>
            <div> */}
                <input type='checkbox' className='Filter_input' id='all' name='all' value={activeFilters.all} onChange={(e) => handleChange(e)}/>
                <label for='all'>All</label>
            {/* </div>        */}
        </form>
    )
    //Accessability note/ maybe hot fix? -> buttons should be wrapped in form -> buttonType = checkbox
}

export default Filter