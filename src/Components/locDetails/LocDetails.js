import "./LocDetails.css";
import Card from "../card/Card";
import GoogleMap from "../map/Map";
import { useParams, Link } from "react-router-dom";

const LocDetails = ({ filteredLocs }) => {
  const locName = useParams().locationName;
  const loc = filteredLocs.find((loc) => {
    return loc.name === locName;
  });

  const position = {lat: loc.latitude, lng: loc.longitude}

  return (
    <div className="LocDetails_wrapper">
      <div className="LocDetails_left_wrapper">
        <h2>{loc.street}</h2>
        <p>Last updated: {loc.updated_at}</p>
        <div className="LocDetails_div_wrapper">
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
        </div>
        <Link className='LocDetails_home_button' to='/'>Go Back</Link>
      </div>
      <div className="Landing_map_wrapper">
        <GoogleMap singlePosition={position} singleZoom={16}/>
      </div>
    </div>
  );
};

export default LocDetails;
