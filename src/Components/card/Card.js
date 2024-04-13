import './Card.css';
import unisex from '../images/Unisex.svg'
import distance from '../images/distance.svg'
import accessible from '../images/accessible.svg'
import { roundNum } from '../../utils/utils';

const Card = ({ name, uni, access, dist }) => {

    const distRounded = roundNum(dist)

    return (
        <div className='Card_div_wrapper'>
            <h3>{name}</h3>
            <div className='Card_icon_container'>
                <div className='Card_distance_container'>
                    <img src={distance} alt='' height='20px' width='20px'></img>
                    <p>{distRounded}m</p>
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