import { Box, Grid } from "@mui/material";
import React from "react";
import VillagerCard from "./VillagerCard";

function VillagerCollection({addFavorite, villagers, search}){

    let searchResults = Object.entries(villagers).filter( ([_, villager]) =>{
        if (
            villager.name && villager.name['name-USen'].toLowerCase().includes(search.toLowerCase() ) 
            ||
            villager.personality.toLowerCase().includes(search.toLowerCase() )
            ||
            villager.species.toLowerCase().includes(search.toLowerCase() )
            ||
            villager['catch-phrase'].toLowerCase().includes(search.toLowerCase() )
        ){
          return true
        }
        return false
      })


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}
            >

            {searchResults.map( ([_, villager]) => {
            return (
                <VillagerCard key = {villager.id} villager ={villager} addFavorite= {addFavorite}/>
                )
            }) 
        }
            </Grid>
        </Box>
    )

}



export default VillagerCollection;