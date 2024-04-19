import './Map.css';
import placeholder from '../images/placeholder-gray2.svg'
import { Loader } from "@googlemaps/js-api-loader"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


const GoogleMap = ({ position, singlePosition } ) => {
    
// const initMaps = (locations) => {
//     const loader = new Loader({
//         apiKey: key,
//         version: "weekly",
//       });
      
//       loader.load().then(async () => {
//         const { Map } = await google.maps.importLibrary("maps");
      
//         map = new Map(document.getElementById("map"), {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 8,
//         });
//       });
// } 
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE}>
        <Map defaultCenter={position} center={singlePosition} zoom={10} className='Map_div_wrapper'>
          <Marker position={position} />
        </Map>
      </APIProvider>
    )
}

export default GoogleMap