import "./LocDetails.css";
import Card from "../card/Card";
import Map from "../map/Map";
import { useParams } from "react-router-dom";

const LocDetails = ({ filteredLocs }) => {
  const locName = useParams().locationName;
  const loc = filteredLocs.find((loc) => {
    return loc.name === locName;
  });

  return (
    <div className="Landing_wrapper">
      <div className="Landing_left_wrapper">
        <h2>{loc.name}</h2>
        <div className="Locations_div_wrapper">
          <Card
            name={loc.name}
            uni={loc.unisex}
            access={loc.accessible}
            dist={loc.distance}
            key={loc.id}
          />
        </div>
      </div>
      <div className="Landing_map_wrapper">
        <Map />
      </div>
    </div>
  );
};

export default LocDetails;
