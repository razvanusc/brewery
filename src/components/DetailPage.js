import React from "react";
import './DetailPage.css'

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      brewery: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          brewery: data
        });
      });
    fetch("https://api.openbrewerydb.org/breweries")
        .then(response => response.json())
        .then((data) => {
          this.setState({
            breweries: data,
          })
        })
  }

  render() {
    const { brewery } = this.state;
    return(
    <div className="background">
      <div className="details">
          <p><b>Name:</b> {brewery.name}</p>
          <p className="category"><b>Category:</b> {brewery.brewery_type}</p>
          <p><b>Address:</b> {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}</p>
          <p><b>Phone Number:</b> {brewery.phone}</p>
          <p><b>Website:</b> <a href={brewery.website_url} target="_blank">{brewery.website_url}</a></p>
      </div>
      <div className="recommendations">Recommendations</div>
      <div className="container">
      <div className="row">
        {this.state.breweries.slice(10,13).map((brewery, i) =>
          <div className="col-xs-12 col-sm-4" key={i}>
              <div className="card">
                <div className="card-description">
                  <h2>{brewery.brewery_type}</h2>
                  <p>{brewery.city}, {brewery.state}</p>
                </div>
                <div className="card-category">{brewery.name}</div>
              </div>
          </div>
        )}
      </div>
      </div>
    </div>
    )
  }
}

export default DetailPage;
