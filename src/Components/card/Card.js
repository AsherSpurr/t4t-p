import './Card.css';

const Card = ({ name }) => {

    return (
        <div className='Card_div_wrapper'>
            <h3>{name}</h3>
        </div>
    )
}

export default Card