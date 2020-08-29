import React from 'react';
import './css/App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Dashboard from './components/Dashboard';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      // string constant ^^
      user: {}
    }
  }

  checkLoginStatus = () => {
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then(response => {
      // console.log("is logged in?", response)
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      } 
    })
    .catch(error => {
      console.log("check login error", error)
    })
  }

  componentDidMount = () => {
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          {/* <Route exact path={'/'} component={Home} /> */}
          <Route 
          exact
          path={'/'} 
          render={props => (
            <Home { ...props }
            handleLogin={this.handleLogin}
            loggedInStatus={this.state.loggedInStatus} 
            handleLogout={this.handleLogout}
            />
          )}
          />
          {/* <Route exact path={'/dashboard'} component={Dashboard} /> */}
          <Route
          exact
          path={'/dashboard'}
          render={props => (
            <Dashboard { ...props } loggedInStatus={this.state.loggedInStatus} />
          )}
          />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(App);
