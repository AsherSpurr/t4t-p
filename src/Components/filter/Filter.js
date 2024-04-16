import './Filter.css';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Filter = ({ updateLocs, locs }) => {
    // const location = useLocation()
    // const history = useHistory()
    // const [searchParams, setSearchParams] = useSearchParams()
    let url = new URL('https://localhost:3000/')
    let params = new URLSearchParams(url.search)
    useEffect(() => {
        updateLocs(locs)
    }, [params])

    //set url to state
    //URLSearchParams -> google MDN URLSearchParams

    function checkParams(value) {
        // console.log(value)
       if(params.has('a', value)) {
            params.delete('a', value)
       } else if(params.has('b', value)){
        params.delete('b', value)
    } else {
        params.append('b', value)
    }
       window.history.replaceState(null, "idfk", params)
    //    console.log(window.location.href = params)
    }

    return (
        <div className='Filter_div_wrapper'>
            <button type='button' className='Filter_button' id='accessible' onClick={(e) => checkParams(e.target.id)}>Accessible</button>
            <button type='button' className='Filter_button' id='unisex' onClick={(e) => checkParams(e.target.id)}>Unisex</button>
            <button type='button' className='Filter_button' id='all' onClick={(e) => checkParams(e.target.id)}>All</button>
        </div>
    )
}

export default Filter