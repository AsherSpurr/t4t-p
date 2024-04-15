import './Filter.css';
import { useState } from 'react';
// import truesvg from '../images/true.svg'
// import falsesvg from '../images/false.svg'
// import distance from '../images/distance-blue.svg'

const Filter = ({ setParamsState }) => {
    const [ada, setAda] = useState('')
    const [unisex, setUnisex] = useState('')
    // const [changingTable, setChangingTable] = useState('')

    function handleFilters(e) {
        // console.log(e.id)
       switch (e.id) {
        case 'ada':
            ada === '' ? setAda(true) : setAda('');
            break;
        case 'unisex':
            unisex === '' ? setUnisex(true) : setUnisex('');
            break;
            default:
                //nothing
       }
    //    sessionStorage.setItem('adaS', JSON.stringify(ada))
    //    sessionStorage.setItem('unisexS', JSON.stringify(unisex))
       setParamsState(ada, unisex)
    }
    // console.log('unisex', unisex)
    // console.log('ada', ada)
    return (
        <div className='Filter_div_wrapper'>
            <button className='Filter_button' id='ada' onClick={(e) => handleFilters(e.target)}>Accessible</button>
            <button className='Filter_button' id='unisex' onClick={(e) => handleFilters(e.target)}>Unisex</button>
            <button className='Filter_button' id='changing_table' >Changing Table</button>
        </div>
    )
}

export default Filter