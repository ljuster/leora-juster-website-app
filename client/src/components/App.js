import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import GalleryItemNew from './GalleryItems/GalleryItemNew'
import GalleryItemShow from './GalleryItems/GalleryItemShow'

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser()
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <MuiThemeProvider>
            <Header />
            <Switch>
              <Route path="/gallery/new" component={GalleryItemNew} />
              <Route exact path="/gallery/:_id" component={GalleryItemShow} />
              <Route path="/gallery" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
