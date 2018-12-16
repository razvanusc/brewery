import React from "react";
import './Menu.css'

class Menu extends React.Component {
  render() {
    return(
      <div className="menu">
          <a href={`/`} className="menu-home">Home</a>
          <a href={`/categories`} className="menu-home">Categories</a>
          <a href={`/random`} className="menu-random">Random</a>
      </div>
    )
  }
}

export default Menu;
