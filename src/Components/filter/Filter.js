import './Filter.css';
import { useState } from 'react';

const Filter = ({ updateLocs, locs, updateFilters }) => {
    const [activeFilters, setActiveFilters] = useState([])
    const [accessible, setAccessible]


    const handleChange = (e) => {
        const filterId = e.target.id
        console.log('filter is checked', e.target.checked)
        if(e.target.checked) {
            setActiveFilters([...activeFilters, filterId])
        } else {
            let filtered = activeFilters.filter((filter) => filter !== filterId)
            setActiveFilters(filtered)
        }
       updateFilters(activeFilters)
    }
    console.log('Filter active filters', activeFilters)

    return (
        <form className='Filter_div_wrapper' onChange={(e) => handleChange(e)}>
            {/* <div> */}
                <input type='checkbox' className='Filter_input' id='accessible'/>
                <label for='accessible'>accessible</label>
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