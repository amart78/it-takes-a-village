import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Favorites from './Favorites';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MyVillagers from './MyVillagers';

function App() {
  const [favorite, setFavorites] = useState([])

  function addFavorite(villager){
    const newFavorite = [...favorite, villager];
    setFavorites(newFavorite);
  }

  console.log(favorite);
  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>

          <Route path="/" element=
            {<Home addFavorite={addFavorite}/>}
          />
           
          <Route path="/favorites" element = 
            {<Favorites villagers = {favorite} search = ''/>}
          />
         
         <Route path="/myvillagers" element = 
            {<MyVillagers search = ''/>}
          />
          

          </Routes>
      </div>
    </Router>
  );
}

export default App;


// App
//  >Home
//    >>Search
//    >>Filter
//    >>VillagerCollection
//      >>> VillagerCard
//  >FavoritedVillagerPage
//  >VillagerWikiPage
//  >MyVillagersPage
//    >>VillagerForm
//    >> Delete
