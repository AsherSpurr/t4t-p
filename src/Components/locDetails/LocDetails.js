import "./LocDetails.css";
import Card from "../card/Card";
import Map from "../map/Map";
import { useParams, Link } from "react-router-dom";

const LocDetails = ({ filteredLocs }) => {
  const locName = useParams().locationName;
  const loc = filteredLocs.find((loc) => {
    return loc.name === locName;
  });

  return (
    <div className="LocDetails_wrapper">
      <div className="LocDetails_left_wrapper">
        <h2>{loc.name}</h2>
        <div className="LocDetails_div_wrapper">
          <Card
            name={loc.name}
            uni={loc.unisex}
            access={loc.accessible}
            dist={loc.distance}
            key={loc.id}
          />
        </div>
        <Link to='/'>Go Back</Link>
      </div>
      <div className="Landing_map_wrapper">
        <Map />
      </div>
    </div>
  );
};

export default LocDetails;
