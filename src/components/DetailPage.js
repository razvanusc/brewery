import React from "react";
import './DetailPage.css';
import { Link } from 'react-router-dom';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      brewery: []
    };
  }

  //Method reloads page and takes the page back to the top when one of the recommendations is clicked
  reloadPage(event) {
    window.location.reload()
    window.scrollTo(0, 0)
  }

  //Method fetches API data
  componentDidMount() {
    const { id } = this.props.match.params;
    //Fetches only one of the items to show details
    fetch(global.url +  "/" + id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          brewery: data
        });
      });
    //Fetches the whole API again to show recommendations
    fetch(global.url)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            breweries: data,
          })
        })
  }

  render() {
      const { brewery } = this.state;
      const { id, state } = brewery;
      const breweries = this.state.breweries.filter(brewery => brewery.id !== id && brewery.state === state);
      return (
        <div className="background">
          <div className="details">
            <p>Name: {brewery.name}</p>
            <p className= "category">Category: {brewery.brewery_type}</p>
            <p>Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}</p>
            <p>Phone Number: {brewery.phone}</p>
            <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
          </div>
          <div className="recommendations">Recommendations</div>
          <div className="container">
            <div className="row">
              {breweries.slice(0,3).map(brewery => (
                <div className="col-xs-12 col-sm-4" key={brewery.id}>
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
              ))}
            </div>
          </div>
        </div>
      );
    }
}

export default DetailPage;
