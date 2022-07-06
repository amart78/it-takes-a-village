import React, {useEffect, useState} from "react";
import VillagerCollection from "./VillagerCollection";

function Favorites({search}){

    const [favorites, setFavorites] = useState( [ ] )

    const fetchFavorites = () => {
        fetch ('http://localhost:3001/favorites/')
        .then(resp => resp.json() )
        .then( (data) => {
            console.log(data);
            setFavorites(data)
        } )
    }
    
    useEffect(fetchFavorites, []);

    return(
        <div>
            <h1> Favorites </h1>
        <VillagerCollection villagers = {favorites} search ="" />
        </div>
    )
}

export default Favorites;