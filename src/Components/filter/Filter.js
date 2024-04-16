import './Filter.css';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = ({ updateLocs, locs }) => {

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        updateLocs(locs)
    }, [searchParams])

    

    return (
        <div className='Filter_div_wrapper'>
            <button type='button' className='Filter_button' id='accessible' onClick={(e) => setSearchParams({'a': e.target.id})}>Accessible</button>
            <button type='button' className='Filter_button' id='unisex' onClick={(e) => setSearchParams({'a': e.target.id})}>Unisex</button>
            <button type='button' className='Filter_button' id='all' onClick={(e) => setSearchParams({'a': e.target.id})}>All</button>
        </div>
    )
}

export default Filter