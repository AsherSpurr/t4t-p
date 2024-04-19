import './Locations.css';
import Card from '../card/Card'

const Locations = ({ filteredLocs }) => {

    const cards = filteredLocs.map((loc) => {
        return (
            <Card 
                name={loc.name}   
                uni={loc.unisex}
                access={loc.accessible}
                dist={loc.distance}  
                street={loc.street}
                city={loc.city}
                state={loc.state}
                upvote={loc.upvote}
                downvote={loc.downvote}
                directions={loc.directions}
                comment={loc.comment}
                updatedAt={loc.updated_at}
                key={loc.id}     
            />
        )
    })
    return (
        <div className={`Locations_div_wrapper`}>
           {cards}
        </div>
    )
}

export default Locations