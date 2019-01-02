import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Brewery from './components/Brewery'
import DetailPage from './components/DetailPage'
import Menu from './components/Menu'
import Random from './components/Random'
import Footer from './components/Footer'
import Category from './components/Category'

class App extends Component {
  render() {
    return (
      <div>
        <div> <Menu /> </div>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Brewery} exact/>
              <Route path="/brewery/:id" component={DetailPage} exact/>
              <Route path="/random" component={Random} exact/>
              <Route path="/:brewery_type" component={Category} exact/>
            </Switch>
          </BrowserRouter>
        </div>
        <div> <Footer /> </div>
      </div>
    )
  }
}

export default App;
