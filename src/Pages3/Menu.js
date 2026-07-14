import React from 'react'
import {MenuList} from "../helpers/menuList";
import MenuItem from "../components/Items";
import "../styles/Menu.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function Menu() {
  return (
    <div className="menu">
      <Navbar />
      <h1 className="menuTitle">Donated Clothes</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
            return (
             <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                description={menuItem.description}/>
            );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
