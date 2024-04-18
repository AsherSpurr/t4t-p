
function fetchBRsByLoc (lat, lon) {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=${lat}&ln=${lon}`)
    .then(response => {
        if(!response.ok) {
            console.log('no')
            // throw new Error('Whoops')
            return response
        }return response.json()
    })
    .catch(error => {
        throw error
    })
}

function fetchLatLon ( street, town, state, key) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${street}%20${town}%20${state}&key=${key}`)
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
