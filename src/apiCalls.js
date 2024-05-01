
function fetchBRsByLoc (lat, lon) {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=${lat}&lng=${lon}`)
    .then(response => {
        if(!response.ok) {
            return response
        } 
            return response.json()
    })
    .catch(error => {
       return error
    })
}

function fetchLatLon ( street, town, state, key) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${street}%20${town}%20${state}&key=${key}`)
        .then(response => {
            if(!response.ok) {
                return response
            }
            return response.json()
        })
        .catch(error => {
            return error
        })
    }

export { fetchBRsByLoc, fetchLatLon }
