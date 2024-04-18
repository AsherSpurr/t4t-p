import './Card.css';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { roundNum } from '../../utils/utils';
import LoadingContext from '../../LoadingContext';
import truesvg from '../images/true.svg'
import falsesvg from '../images/false.svg'
import distance from '../images/distance-blue.svg'
import downvotesvg from '../images/thumbs-down.svg'
import upvotesvg from '../images/thumbs-up.svg'

const Card = ({ name, uni, access, dist, city, state, upvote, downvote, directions, comment }) => {

    const distRounded = roundNum(dist)
    const locName = useParams().locationName;
    const value = useContext(LoadingContext)
    const navigate = useNavigate()

    return (
            <div className={locName === name ? 'LocDetails_div_wrapper' : 'Card_div_wrapper'}>
            <div className={locName === name ? 'LocDetails_div_container' : `Card_div_container ${value}`} onClick={() => navigate(`/${name}`)}>
                <div className={locName === name ? 'LocDetails_img_container' : 'Card_img_container'}>
                    <span className={locName === name ? 'LocDetails_img_placeholder' : 'Card_img_placeholder'}></span>
                </div>
                <div className={locName === name ? 'LocDetails_contents_container' : 'Card_contents_container'}>
                    {locName === name ? 
                    <><div className='LocDetails_heading_container'>
                        <h3 className='LocDetails_h3'>{city} | {state}</h3> 
                        <div className='LocDetails_icons_container'>
                            <img id='LocDetails_icon_upvote' src={upvotesvg} alt='' height='20px' width='20px'></img>
                            <p className='LocDetails_p'>{upvote}</p>
                            <img id='LocDetails_icon_downvote' src={downvotesvg} alt='' height='20px' width='20px'></img>
                            <p className='LocDetails_p'>{downvote}</p>
                        </div>
                        </div></>
                    : <h3 className='Card_h3'>{name}</h3>}
                    <div className={locName === name ? 'LocDetails_icons_container' : 'Card_icons_container'}>
                        <div className={locName === name ? 'LocDetails_distance_container' : 'Card_distance_container'}>
                            <img src={distance} alt='' height='20px' width='20px'></img>
                            <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>{distRounded}m</p>
                        </div>
                        <div className={locName === name ? 'LocDetails_params_icon_container' : 'Card_params_icon_container'}>
                            {uni ? <img id={locName === name ? 'LocDetails_icon_unisex' : 'Card_icon_unisex'} src={truesvg} alt='' height='20px' width='20px'></img> : <img id='Card_icon_unisex' src={falsesvg} alt='' height='20px' width='20px'></img>}
                            <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>Unisex</p>
                            {access ? <img id={locName === name ? 'LocDetails_icon_accessible' : 'Card_icon_unisex'} src={truesvg} alt='' height='20px' width='20px'></img> : <img id='Card_icon_unisex' src={falsesvg} alt='' height='20px' width='20px'></img>}
                            <p className={locName === name ? 'LocDetails_p' : 'Card_p'}>Accessible</p>
                        </div>
                    </div>
                    {locName === name &&
                        <div className='LocDetails_moreInfo_wrapper'>
                            <p>Directions: {directions}</p>
                            <p>Comment: {comment}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
        name: PropTypes.string.isRequired,
        uni: PropTypes.bool.isRequired,
        access: PropTypes.bool.isRequired,
        dist: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        upvote: PropTypes.number.isRequired,
        downvote: PropTypes.number.isRequired,
        directions: PropTypes.string,
        comment: PropTypes.string,
}

export default Card