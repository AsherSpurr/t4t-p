import './Card.css';
import { useContext } from 'react';
import truesvg from '../images/true-muted2.svg'
import falsesvg from '../images/false-dark-coral.svg'
import distance from '../images/distance-dark-purple.svg'
import downvotesvg from '../images/thumbs-down.svg'
import upvotesvg from '../images/thumbs-up.svg'
import { roundNum } from '../../utils/utils';
import { useNavigate, useParams } from 'react-router-dom';
// import LoadingContext from '../../LoadingContext';

const Card = ({ name, uni, access, dist, city, state, upvote, downvote, directions, comment }) => {

    const distRounded = roundNum(dist)
    const locName = useParams().locationName;
    // const value = useContext(LoadingContext)
    const navigate = useNavigate()

    return (
            <div className={locName === name ? 'LocDetails_div_wrapper' : 'Card_div_wrapper'}>
            <div className={locName === name ? 'LocDetails_div_container' : `Card_div_container`} onClick={() => navigate(`/locations/${name}`)}>
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

export default Card