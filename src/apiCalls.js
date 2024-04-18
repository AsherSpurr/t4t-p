
function fetchBRsByLoc (lat, lon) {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=${lat}&lng=${lon}`)
    .then(response => {
        if(!response.ok) {
            console.log(response)
            return response
        } 
            return response.json()

    })
    .catch(error => {
       console.log(error)
       return error
    })
}

function fetchLatLon ( street, town, state, key) {
        return fetch(`https://maps.googleapis.com/maps/api/gecode/json?address=${street}%20${town}%20${state}&key=${key}`)
        .then(response => {
            if(!response.ok) {
                return response
            }
            return response.json()
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }

export { fetchBRsByLoc, fetchLatLon }

//Baseline by loication -> no params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?   page=0  &  per_page=10  &  offset=0  &  lat=39.753604  &  lng=-104.428580

//By location with ADA and Unisex params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?  page=0  &  per_page=10  &  offset=0  &ada=true&unisex=true  &  lat=39.753604&lng=-104.428580