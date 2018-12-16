import React from "react";
import './Brewery.css'
import { Link } from 'react-router-dom';

class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
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

  render() {



    const { breweries } = this.state;

    return(
    <div>
      <div class="banner" styles="background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('http://bitterminnesotabrewerytours.com/wp-content/uploads/2014/02/boston-beer-tours-glass.jpg');">
        <div class="banner-content">
          <h1>Brewery</h1>
          <p>asd</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {breweries.slice(0,10).map((brewery, i) =>
            <div className="col-xs-12 col-sm-4" key={i}>
              <Link to={`/brewery/${ brewery.id }`}>
                <div className="card">
                  <div className="card-description">
                    <h2>{brewery.brewery_type}</h2>
                    <p>{brewery.city}, {brewery.state}</p>
                  </div>
                  <div className="card-category">{brewery.name}</div>
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
