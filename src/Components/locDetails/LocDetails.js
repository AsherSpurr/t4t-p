import "./LocDetails.css";
import { useParams, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import Card from "../card/Card";
import Map from "../map/Map";

const LocDetails = ({ filteredLocs }) => {
  const locName = useParams().locationName;
  const loc = filteredLocs.find((loc) => {
    return loc.name === locName;
  });

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
           city={loc.city}
           state={loc.state}
           upvote={loc.upvote}
           downvote={loc.downvote}
           directions={loc.directions}
           comment={loc.comment}
           key={loc.id} 
          />
        </div>
      </div>
        <Link to='/'>Go Back</Link>
      <div className="Landing_map_wrapper">
        <Map />
      </div>
    </div>
  );
};

LocDetails.propTypes = {
    loc: PropTypes.arrayOf(PropTypes.shape({
      street: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }))
}

export default LocDetails;
