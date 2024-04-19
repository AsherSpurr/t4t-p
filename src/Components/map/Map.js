import './Map.css';
import placeholder from '../images/placeholder-gray2.svg'
import { Loader } from "@googlemaps/js-api-loader"


const Map = ({ mapContainerClassName, center, zoom} ) => {
    
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
        <div className={mapContainerClassName} center={center} zoom={zoom}>
            <img className='Map_img' src={placeholder} alt=''></img>
        </div>
    )
}

export default Map