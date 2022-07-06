import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link, useNavigate } from "react-router-dom";



function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  let navigate = useNavigate();

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
        <Tab 
          icon={<HomeIcon />} 
          label="HOME" 
          onClick={() => navigate("/", { replace: true })}
        />
 
        <Tab 
          icon={<FavoriteIcon />} 
          label="FAVORITES" 
          onClick={() => navigate("/favorites", { replace: true })}
        />

     
        <Tab 
          icon={<GroupsIcon />} 
          label="MY VILLAGERS" 
          onClick={() => navigate("/myvillagers", { replace: true })}
        />

    </Tabs>
  );
}
export default NavBar;
