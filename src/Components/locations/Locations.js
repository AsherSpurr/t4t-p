import './Locations.css';
import Card from '../card/Card'
import Filter from "../filter/Filter";
import LoadingContext from "../../LoadingContext";
import { useEffect, useState } from 'react';

const Locations = ({ filteredLocs, updateFilters }) => {
    const [isLoading, setIsLoading] = useState("loading");

    useEffect(() => {
        filteredLocs.length ? setIsLoading('') : setIsLoading('loading')
    }, [filteredLocs])

    const cards = filteredLocs.map((loc) => {
        return (
            <Card 
                name={loc.name}   
                uni={loc.unisex}
                access={loc.accessible}
                dist={loc.distance}  
                street={loc.street}
                city={loc.city}
                state={loc.state}
                upvote={loc.upvote}
                downvote={loc.downvote}
                directions={loc.directions}
                comment={loc.comment}
                updatedAt={loc.updated_at}
                key={loc.id}     
            />
        )
    })
    return (
        <>
        {filteredLocs.length > 0 && <Filter updateFilters={updateFilters}/>}
        <LoadingContext.Provider value={isLoading}>
            <div className={`Locations_div_wrapper ${isLoading}`}>
                {cards}
            </div>
        </LoadingContext.Provider>
        </>
    )
}

export default Locations