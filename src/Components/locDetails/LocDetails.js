import './LocDetails.css';
import Card from '../card/Card';
import { useParams } from 'react-router-dom'

const LocDetails = ({ filteredLocs }) => {
    const locName = useParams().locationName
    const loc = filteredLocs.find((loc) => {
        return loc.name === locName
    })

    return (
        <>
            <Card 
              name={loc.name}   
              uni={loc.unisex}
              access={loc.accessible}
              dist={loc.distance}  
              key={loc.id}  
            />
        </>
    )
}

export default LocDetails