import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <div className= "ifooter">
        <ul>
          <h2>Our Website</h2>
          <li><a href="/">Home</a></li>
          <li><a href="/random">Random</a></li>
        </ul>
        <ul>
          <h2>Connect</h2>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
        <ul>
          <h2>Company</h2>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Footer;
