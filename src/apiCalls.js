
//Bennett
// 39.753604
//-104.428580
function fetchBRsByLoc (lat, lon, ada, unisex) {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&ada=${ada}&unisex=${unisex}&lat=${lat}&lng=${lon}`)
    .then(response => {
        if(!response.ok) {
            throw new Error('Whoops')
        }return response.json()
    })
    .catch(error => {
        throw error
    })
}
// const fetchBRsByLoc = async (lat, lon) => {
//     try {
//         const response = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=${lat}&lng=${lon}`)
//         if(!response.ok) {
//             throw new Error('Whoops')
//         }
//         return await response.json() 
//     } 
//     catch(error) {
//         throw error
//     }
// }

function fetchLatLon (num, street, streetIdent, town, state, key) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${num}%20${street}%20${streetIdent}%20${town}%20${state}&key=${key}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Uh oh')
            }
            return response.json()
        })
        .catch(error => {
            throw error
        })
    }

export { fetchBRsByLoc, fetchLatLon }

//Baseline by loication -> no params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?   page=0  &  per_page=10  &  offset=0  &  lat=39.753604  &  lng=-104.428580

//By location with ADA and Unisex params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?  page=0  &  per_page=10  &  offset=0  &ada=true&unisex=true  &  lat=39.753604&lng=-104.428580