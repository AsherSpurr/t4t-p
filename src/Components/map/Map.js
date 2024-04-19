import "./Map.css";
import { useLocation } from "react-router-dom";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = ({ position, singlePosition, singleZoom, allLocsCoordinates, }) => {

  const path = useLocation().pathname;

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
      {path.includes("locations") ? (
      <Map
        center={singlePosition}
        zoom={singleZoom}
        className="Map_div_wrapper"
      >
        <Marker defaultPosition={position} position={singlePosition} />   </Map>
      ) : (
        <Map
        center={position}
        defaultZoom={10}
        className="Map_div_wrapper"
      >
       { allLocsCoordinates.map((loc) => {
            return <Marker position={loc} />;
        })
          }
          </Map> )}
   
    </APIProvider>
  );
};

export default GoogleMap;
