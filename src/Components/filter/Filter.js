import './Filter.css';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import truesvg from '../images/true.svg'
// import falsesvg from '../images/false.svg'
// import distance from '../images/distance-blue.svg'

const Filter = ({ updateLocs, filterLocs }) => {
    const [ada, setAda] = useState(false)
    const [unisex, setUnisex] = useState(false)
    const [all, setAll] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const navigate = useNavigate();

    useEffect(() => {
        
    }, [searchParams])

    

    return (
        <div className='Filter_div_wrapper'>
            <button type='button' className='Filter_button' id='accessible' value={ada} onClick={(e) => setSearchParams({'a': e.target.id})}>Accessible</button>
            <button type='button' className='Filter_button' id='unisex' value={unisex} onClick={(e) => setSearchParams({'a': e.target.id})}>Unisex</button>
            <button type='button' className='Filter_button' id='all' value={all} onClick={(e) => setSearchParams({'a': e.target.id})}>All</button>
        </div>
    )
}

    // if(e === 'accessible' && unisex === false && ada === false ) {
    //     navigate('/all', {replace: false})
    //   } else if(e === 'unisex' && unisex === false && ada === false ) {
    //     navigate('/all', {replace: false})
    //    if(e === 'accessible' && ada === true && unisex === false) {
    //     navigate('/accessible', {replace: false})
    //   } else if(e === 'unisex' && unisex === true && ada === false) {
    //     navigate('unisex', {replace: false})
    //   } else if(e === 'unisex' && ada === true) {
    //     navigate('/accessible/unisex', {replace: false})
    //   } else if(e === 'accessible' && unisex === true) {
    //     navigate('/accessible/unisex', {replace: false})
    //   } else if(e === 'all') {
    //     navigate('/all', {replace: false})
    //   }

export default Filter