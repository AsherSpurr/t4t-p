import './Filter.css';
// import truesvg from '../images/true.svg'
// import falsesvg from '../images/false.svg'
// import distance from '../images/distance-blue.svg'

const Filter = () => {
    return (
        <div className='Filter_div_wrapper'>
            <button className='Filter_button'>Accessible</button>
            <button className='Filter_button'>Unisex</button>
            <button className='Filter_button'>Changing Table</button>
        </div>
    )
}

export default Filter