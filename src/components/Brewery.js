import React from "react";
import './Brewery.css'
import { Link } from 'react-router-dom';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';


class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
  }

  //Method scrolls to top of the page when one of the items is clicked
  reloadPage(event) {
    window.scrollTo(0, 0)
  }



  //Method fetches API data
  componentDidMount() {
    fetch(global.url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          breweries: data,
        })
      })
  }

  //Method sorts items alphabetically(A-Z)
  sortAlpha() {
      const breweries = [...this.state.breweries.slice(0,10)].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      this.setState({ breweries: breweries });
    }

  //Method sorts items alphabetically(Z-A)
  sortRevAlpha() {
    const breweries = [...this.state.breweries.slice(0,10)].sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
    this.setState({ breweries: breweries });
  }

  render() {
    const { breweries } = this.state;
    return(
      <div className="main-container">
        <div className="banner">
          <div className="banner-content">
            <h1>Brewery</h1>
            <p>Find the best brewery in town</p>
          </div>
        </div>
        <div className="container">
          <div className="brewery-sort">
            <ButtonToolbar>
              <DropdownButton
              bsStyle="default"
              title="Sort"
              noCaret
              id="dropdown-no-caret"
              >
                <MenuItem onClick={() => this.sortAlpha()}>Alphabetically (A-Z)</MenuItem>
                <MenuItem onClick={() => this.sortRevAlpha()}>Alphabetically (Z-A)</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </div>
          <div className="row">
            {breweries.slice(0, 10).map((brewery, i) =>
              <div className="col-xs-12 col-sm-4" key={i}>
                <Link to={`/brewery/${ brewery.id }`} onClick={ this.reloadPage.bind(this)}>
                  <div className="card">
                    <div className="card-description">
                      <h2>{brewery.brewery_type}</h2>
                      <p>{brewery.city}, {brewery.state}</p>
                    </div>
                    <div className="card-name">{brewery.name}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Brewery;
