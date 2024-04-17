import './Card.css';
import truesvg from '../images/true.svg'
import falsesvg from '../images/false.svg'
import distance from '../images/distance-blue.svg'
import { roundNum } from '../../utils/utils';
import { NavLink } from 'react-router-dom';
import LocDetails from '../locDetails/LocDetails';

const Card = ({ name, uni, access, dist }) => {

    const distRounded = roundNum(dist)

    return (
        <div className='Card_div_wrapper'>
            <NavLink to={`/${name}`} >
            <div className='Card_div_container'>
                <div className='Card_img_container'>
                    <span className='Card_img_placeholder'></span>
                </div>
                <div className='Card_contents_container'>
                    <h3 className='Card_h3'>{name}</h3>
                    <div className='Card_icons_container'>
                        <div className='Card_distance_container'>
                            <img src={distance} alt='' height='20px' width='20px'></img>
                            <p className='Card_p'>{distRounded}m</p>
                        </div>
                        <div className='Card_params_icon_container'>
                            {uni ? <img id='Card_icon_unisex' src={truesvg} alt='' height='20px' width='20px'></img> : <img id='Card_icon_unisex' src={falsesvg} alt='' height='20px' width='20px'></img>}
                            <p className='Card_p'>Unisex</p>
                            {access ? <img id='Card_icon_unisex' src={truesvg} alt='' height='20px' width='20px'></img> : <img id='Card_icon_unisex' src={falsesvg} alt='' height='20px' width='20px'></img>}
                            <p className='Card_p'>Accessible</p>
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    )
}

export default Card