import React from "react";
import './DetailPage.css'

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    const { brewery } = this.state;
    return(
      <div className="details">
          <p>Name: {brewery.name}</p>
          <p>Category: {brewery.brewery_type}</p>
          <p>Address: {brewery.street}, {brewery.city}, {brewery.state}, {brewery.postal_code}, {brewery.country}</p>
          <p>Phone Number: {brewery.phone}</p>
          <p>Website: <a href={brewery.website_url} target="_blank">{brewery.website_url}</a></p>
      </div>
    )
  }
}

export default DetailPage;
