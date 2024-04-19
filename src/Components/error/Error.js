import './Error.css'
import { useLocation } from 'react-router-dom'
import whoopsies from '../images/whoopsies-600px.gif'

const Error = () => {
    const locationError = useLocation()

    return (
        <div className='Error_wrapper'>
            <article className='Error_text_container'>
                <h2 className='Error_h2'>{locationError.state? locationError.state.status : 'XXX'}</h2>
                <b><p>{locationError.state? locationError.state.statusText : "It seems we can't locate what you're looking for"}</p></b>
                <p>Here are some suggestions:</p>
                <ul>
                    <li>Navigate back to the home page.</li>
                    <li>Check you're internet connection.</li>
                    <li>Take a 30 min walk and enjoy the view!</li>
                </ul>
            </article>
            <img className='Error_img' src={whoopsies} alt='Gif of scrolling banner containing text page not found'></img>
        </div>
    )
}

export default Error