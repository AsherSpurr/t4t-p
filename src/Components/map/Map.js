import "./Map.css";
import { useLocation } from "react-router-dom";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = ({ position, singlePosition, singleZoom, allLocsCoordinates, }) => {

  const path = useLocation().pathname;

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
      <Map
        defaultCenter={position}
        center={singlePosition}
        defaultZoom={10}
        zoom={singleZoom}
        className="Map_div_wrapper"
      >
      {!path.includes("locations") ? (
        allLocsCoordinates.map((loc) => {
            return <Marker position={loc} />;
        })
      ) : (
          <Marker defaultPosition={position} position={singlePosition} />
        )}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
