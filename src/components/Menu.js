import React from "react";
import './Menu.css';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          breweries: data,
        })
      })
  }

  render() {
    const categories = [];
    {this.state.breweries.slice(0,10).map((brewery) =>
      categories.push(brewery.brewery_type)
    )}
    const uniqueCategories = Array.from(new Set(categories))
    uniqueCategories.sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
    })
    const outputCategories = uniqueCategories.map(v => (
      <MenuItem key={v.id}>
        <a href={"/" + v} onClick="console.log('yes')" className="cat-dropdown">{v}</a>
      </MenuItem>
    ));

    return(
      <div className="menu">
      <div className="pint"><a href="/"><img src={require("../pint.png")} alt="Pint" height="50" width="50"/></a></div>
      <div className="menu-btns">
        <div className="cont-home"><a href={`/`} className="menu-home">Home</a></div>
        <div className="cont-categories">
          <ButtonToolbar>
            <DropdownButton
            bsStyle="default"
            title="Categories"
            noCaret
            id="dropdown-no-caret"
            className="menu-categories"
            >
              {outputCategories}
            </DropdownButton>
          </ButtonToolbar>
        </div>
        <div className="cont-random"><a href={`/random`} className="menu-random">Random</a></div>
      </div>
      </div>
    )
  }
}

export default Menu;
