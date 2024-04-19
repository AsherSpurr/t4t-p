import './Map.css';
// import placeholder from '../images/placeholder-gray2.svg'
// import { Loader } from "@googlemaps/js-api-loader"
import {APIProvider, Map, Marker, useMapsLibrary} from '@vis.gl/react-google-maps';


const GoogleMap = ({ position, singlePosition, singleZoom, allLocsCoordinates } ) => {
    
    function markerCluster() {
        const markerClusterLibrary = useMapsLibrary
    }
    // {allLocsCoordinates.map((loc) => {

    // })}
    console.log(allLocsCoordinates)
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
        <Map defaultCenter={position} center={singlePosition} defaultZoom={10} zoom={singleZoom} className='Map_div_wrapper'>
          <Marker defaultPosition={position} position={singlePosition}/>
        </Map>
      </APIProvider>
    )
}

export default GoogleMap