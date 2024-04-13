import './Card.css';
import unisex from '../images/Unisex.svg'
import distance from '../images/distance.svg'
import accessible from '../images/accessible.svg'

const Card = ({ name, uni, access, dist }) => {

    return (
        <div className='Card_div_wrapper'>
            <h3>{name}</h3>
            <div className='Card_icon_container'>
                <div className='Card_distance_container'>
                    <img src={distance} alt='' height='20px' width='20px'></img>
                    <p>{dist}</p>
                </div>
                <div className='Card_params_icon_container'>
                    {uni ? <img src={unisex} alt='' height='20px' width='20px'></img> : <></>}
                    {access ? <img src={accessible} alt='' height='20px' width='20px'></img> : <></>}
                </div>
            </div>
        </div>
    )
}

export default Card