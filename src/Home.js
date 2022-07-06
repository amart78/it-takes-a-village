import { Container } from "@mui/material";
import React, {useState, useEffect} from "react";
import VillagerCollection from "./VillagerCollection";
import Search from "./Search";


function Home({addFavorite}){

    const [villagers, setVillagers] = useState( [ ] )
    const [search, setSearch] = useState("")

    const fetchVillagers = () => {
        fetch ('http://localhost:3001/villagers/')
        .then(resp => resp.json() )
        .then( (data) => {
            console.log(data);
            setVillagers(data)
        } )
    }
    
    useEffect(fetchVillagers, []);

    return (
        <Container>
            <br/>
            <h1> It Takes a Village</h1>
            <h2>Your #1 Animal Crossing Villager Information Source</h2>
            <br/>
            <Search setSearch = {setSearch}/>
            <br />
            <VillagerCollection villagers = {villagers} search = {search} addFavorite={addFavorite}/>
        </Container>
    );
}

export default Home;