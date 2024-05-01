// import { Button } from "@mui/material";
// import { useState } from "react";
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import MapIcon from '@mui/icons-material/Map';

// export const ToggleButton = () => {
//     const [isClicked, setIsClicked] = useState(false)
//     const mapView = document.querySelector('.Locations_map_wrapper')

//     const toggleView = () => {
//         isClicked ? setIsClicked(true) : setIsClicked(false);
//         mapView.classList.toggle('Locations_map_wrapper')
//     }
// console.log(isClicked)
//   return (
//       <Button
//         variant="outlined"
//         endIcon={isClicked ? <FormatListBulletedIcon/> : <MapIcon/>}
//         type="submit"
//         padding="0"
//         // startIcon={<MapIcon fontSize="large" />}
//         size="large"
//         onClick={toggleView}
//       ></Button>
//   );
// };