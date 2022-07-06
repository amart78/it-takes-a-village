import { Grid, Card, Typography, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';
import React from 'react';

  

const VillagerCard = ({villager, addFavorite}) => {


    return (
        <Grid item xs={4} sm={3} md={2.35} key = {villager.id} >
            
            <Card  color = 'secondary' elevation={3}>
            <CardActionArea onClick = { () => {
                window.location.href = `https://animalcrossing.fandom.com/wiki/${villager.name['name-USen']}`;
            }}>

                <CardMedia>    
                <img 
                component = 'img' 
                src = {villager.image_uri} 
                alt= {villager.name['name-USen']} 
                />
                </CardMedia>

                <CardContent>
                    <Typography gutterBottom variant='h4'component='div' >
                        {villager.name['name-USen']}
                    </Typography>
                    <Typography variant='subtitle2' component='div' >
                        Species: {villager.species}
                    </Typography>
                    <Typography variant='subtitle2' component='div'>
                        Personality: {villager.personality}
                    </Typography>
                    <Typography variant='subtitle2'  component='div' >
                        Catch-phrase: {villager['catch-phrase']}
                    </Typography>
                </CardContent>

            </CardActionArea>
                <Button 
                size="small" 
                color="primary" 
                component='div'
                onClick = { () => {
                    villager.id = Math.random()

                    fetch("http://localhost:3001/favorites", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(villager),
                      })
                        .then(resp => resp.json())
                        .then(addFavorite);
                        }
                    }
                >
                    Favorite ♥
                </Button>
            
            </Card>

        </Grid>
  );
};


export default VillagerCard;

