
//Bennett
// 39.753604
//-104.428580
function fetchBRsByLoc (lat, lon) {
    return fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=${lat}&lng=${lon}`)
    .then(response => {
        if(!response.ok) {
            console.log(response)
            return response
        } 
            return response.json()

    })
    .catch(({name, message}) => {
        console.log(name)
        console.log(message)
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

//Baseline by loication -> no params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?   page=0  &  per_page=10  &  offset=0  &  lat=39.753604  &  lng=-104.428580

//By location with ADA and Unisex params
// https://www.refugerestrooms.org/api/v1/restrooms/by_location?  page=0  &  per_page=10  &  offset=0  &ada=true&unisex=true  &  lat=39.753604&lng=-104.428580