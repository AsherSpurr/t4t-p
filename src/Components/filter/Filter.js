import './Filter.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import truesvg from '../images/true.svg'
// import falsesvg from '../images/false.svg'
// import distance from '../images/distance-blue.svg'

const Filter = ({ updateLocs, filterLocs }) => {
    const [ada, setAda] = useState(false)
    const [unisex, setUnisex] = useState(false)

    const navigate = useNavigate();

    // function setState(e) {
    //     switch(e) {
    //         case 'accessible':
    //             !ada ? setAda(true) : setAda(false);
    //             break;
    //         case 'unisex':
    //             !unisex ? setUnisex(true) : setUnisex(false);
    //             break;
    //         default:
    //         console.log('idk')
    //     }
    //     handleFilters(e)
    // }

    // function handleFilters(e) {
    //   /*if(e === 'accessible' && unisex === false && ada === false ) {
    //     navigate('/all', {replace: false})
    //   } else if(e === 'unisex' && unisex === false && ada === false ) {
    //     navigate('/all', {replace: false})
    //   }*/  if(e === 'accessible' && ada === true && unisex === false) {
    //     navigate('/accessible', {replace: false})
    //   } else if(e === 'unisex' && unisex === true && ada === false) {
    //     navigate('unisex', {replace: false})
    //   } else if(e === 'unisex' && ada === true) {
    //     navigate('/accessible/unisex', {replace: false})
    //   } else if(e === 'accessible' && unisex === true) {
    //     navigate('/accessible/unisex', {replace: false})
    //   }
    // }
    // console.log('ada', ada)
    // console.log('unisex', unisex)
    // const url = ''
    // const isUnisex = url.includes('unisex')

    return (
        <div className='Filter_div_wrapper'>
            <button className='Filter_button' id='accessible' onClick={(e) => filterLocs(e.target.id)}>Accessible</button>
            <button className='Filter_button' id='unisex' onClick={(e) => filterLocs(e.target.id)}>Unisex</button>
            <button className='Filter_button' id='all' >Changing Table</button>
        </div>
    )
}

export default Filter