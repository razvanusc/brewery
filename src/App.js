import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Brewery from './components/Brewery'
import DetailPage from './components/DetailPage'
import Menu from './components/Menu'

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
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    )
  }
}

export default App;
