import './Locations.css';
import Card from '../card/Card'

const Locations = ({ locs }) => {

    const cards = locs.map((loc) => {
        return (
            <Card 
                name={loc.name}   
                uni={loc.unisex}
                access={loc.accessible}
                dist={loc.distance}  
                key={loc.id}     
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