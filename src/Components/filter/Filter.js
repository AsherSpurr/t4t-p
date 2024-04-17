import './Filter.css';
import { formatSearchParams } from '../../utils/utils';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Filter = ({ updateLocs, locs }) => {

    let url = new URL('https://localhost:3000/?')
    let params = new URLSearchParams(url.search)

    function checkParams(value) {

    if(params.has('b', value) ){
        params.delete('b', value)
    } 
    else if(params.has('b', 'accessible') && value === 'all'){
       params.set('b', 'all')
    } 
    else if(params.has('b', 'unisex') && value === 'all') {
        params.set('b', 'all')
    } 
    else if(params.has('b', 'all') && value === 'accessible') {
        params.delete('b', 'all')
    } 
    else if(params.has('b', 'all') && value === 'unisex') {
        params.delete('b', 'all')
    } 
    else {
        params.append('b', value)
    }
       window.history.replaceState(value, "", params)
    //    handleLocUpdate()
    const paramsS = formatSearchParams(window.location.href)
       updateLocs(locs, paramsS)
       //    console.log(window.location.href = params)
     
//    console.log('windowLoc', window.location.href)
    }

    // const handleLocUpdate = () => {
    //     updateLocs(locs)
    // }
    return (
        <div className='Filter_div_wrapper'>
            <button type='button' className='Filter_button' id='accessible' onClick={(e) => checkParams(e.target.id)}>Accessible</button>
            <button type='button' className='Filter_button' id='unisex' onClick={(e) => checkParams(e.target.id)}>Unisex</button>
            <button type='button' className='Filter_button' id='all' onClick={(e) => checkParams(e.target.id)}>All</button>
        </div>
    )
}

export default Filter