import './Filter.css';
import { useState } from 'react';
// import truesvg from '../images/true.svg'
// import falsesvg from '../images/false.svg'
// import distance from '../images/distance-blue.svg'

const Filter = ({ setParamsState }) => {
    const [ada, setAda] = useState('')
    const [unisex, setUnisex] = useState('')
    // const [changingTable, setUnisex] = useState(null)

    function handleFilters(e) {
        console.log(e)
    }
    return (
        <div className='Filter_div_wrapper'>
            <button className='Filter_button' onClick={(e) => handleFilters(e.target)}>Accessible</button>
            <button className='Filter_button'>Unisex</button>
            <button className='Filter_button'>Changing Table</button>
        </div>
    )
}

export default Filter