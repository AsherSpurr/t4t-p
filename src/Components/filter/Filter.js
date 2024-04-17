import './Filter.css';
import { useState } from 'react';
import { filters } from '../../utils/utils';

const Filter = ({ name, id, index, locs, setFilteredLocs, accessibleLocs, unisexLocs, adaAndUnisexLocs }) => {
    // const [activeFilters, setActiveFilters] = useState([])

    const [isChecked, setIsChecked] = useState({'accessible': false, 'unisex': false, 'all': false})
    // console.log(isChecked.accessible)



    return (
      
                <>
                    <input type='checkbox' className='Filter_input' name={name} id={id} value={id} checked={isChecked[index]}  onChange={(e) => handleChange(e)}/>
                    <label for={id}>{id}</label>
                </>
     
    )
    //Accessability note/ maybe hot fix? -> buttons should be wrapped in form -> buttonType = checkbox
}

export default Filter