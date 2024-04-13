import './Locations.css';
import Card from '../card/Card'

const Locations = ({ locs }) => {
    const cards = locs.map((loc) => {
        return (
            <Card 
                name={loc.name}          
            />
        )
    })
    return (
        <div className='Locations_div_wrapper'>
           {cards}
        </div>
    )
}

export default Locations