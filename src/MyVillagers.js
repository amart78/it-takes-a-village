import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import VillagerCollection from "./VillagerCollection";

function MyVillagers() {

  const [myVillagers, setMyVillagers] = useState( [ ] )

  const fetchVillagers = () => {
      fetch ('http://localhost:3001/myvillagers')
      .then(resp => resp.json() )
      .then( (data) => {
          console.log(data);
          setMyVillagers(data)
      } )
  }
  
  useEffect(fetchVillagers, []);

  const [formData, setFormData] = useState({
    image_url: "",
    name: "",
    species: "",
    personality: "",
    catch_phrase: "",
  })

  function handleChange(e){
    setFormData(
      {...formData, 
        [e.target.name]: e.target.value,
      });
  }

  function handleSubmit(e){
    e.preventDefault();

    const newVillager ={
      image_url: formData.image_url,
      name: {
        'name-USen': formData.name,
      },
      species: formData.species,
      personality: formData.personality,
      'catch-phrase': formData.catch_phrase,
     
    };
 
    fetch("http://localhost:3001/myvillagers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVillager),
    })
      .then(resp => resp.json())
      .then( () => {
        fetch ('http://localhost:3001/myvillagers')
        .then(resp => resp.json() )
        .then( (data) => {
            console.log(data);
            setMyVillagers(data)
        } )
      }
    )
  }

  return (
    <div>
      <h3>Add Your Villagers Via the Form Below</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Image URL" 
            placeholder="Image URL" 
            name="image_url" 
            onChange={handleChange}
            value = {formData.image_url}
          />
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleChange}
            value = {formData.name}
          />
          <Form.Input
            fluid label="Species"
            placeholder="Species"
            name="species"
            onChange={handleChange}
            value = {formData.species}
          />
          <Form.Input
            fluid label="Personality"
            placeholder="Personality"
            name="personality"
            onChange={handleChange}
            value = {formData.personality}
          />
          <Form.Input
            fluid label="Catch phrase"
            placeholder="Catch phrase"
            name="catch_phrase"
            onChange={handleChange}
            value = {formData.catch_phrase}
          />
        </Form.Group>
        <br/>
        <Form.Button type = "submit">Submit</Form.Button>
        <br/>
      </Form>
      <div>
        <VillagerCollection villagers = {myVillagers} search = '' />
      </div>
    </div>
  );
}

export default MyVillagers;