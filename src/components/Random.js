import React from "react";
import './Random.css';


class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      brewery: []
    };
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

  newRandom() {
    const brewery = this.state.breweries.slice(0, 10)[Math.floor(Math.random()*this.state.breweries.length)];
    this.setState({brewery:brewery});
  }

  render() {
    const brewery = this.state.breweries[Math.floor(Math.random()*this.state.breweries.length)];
    return(
    <div className="main">
      <div className="details">
        <p><b>Name:</b> {brewery && brewery.name}</p>
        <p className="category"><b>Category:</b> {brewery && brewery.brewery_type}</p>
        <p><b>Address:</b> {brewery && brewery && brewery.street}, {brewery && brewery.city},
          {brewery && brewery.state}, {brewery && brewery.postal_code}, {brewery && brewery.country}</p>
        <p><b>Phone Number:</b> {brewery && brewery.phone}</p>
        <p><b>Website:</b> <a href={brewery && brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery && brewery.website_url}</a></p>
      </div>
      <div className="button">
        <button className="btn-random" onClick={() => this.newRandom()}>Get another random brewery</button>
      </div>
    </div>
    )
  }
}

export default Random;
