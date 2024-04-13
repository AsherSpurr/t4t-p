
//Bennett


const fetchBRsByLocNoParams = async (lat, lon) => {
    try {
        const response = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=${lat}&lng=${lon}`)
        if(!response.ok) {
            throw new Error('Whoops')
        }
        return await response.json() 
    } 
    catch(error) {
        throw error
    }
}

export { fetchBRsByLocNoParams }

// https://www.refugerestrooms.org/api/v1/restrooms/by_location?   page=0  &  per_page=10  &  offset=0  &  lat=39.753604  &  lng=-104.428580