import React from 'react';
import '../css/App.css';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import LogIn from './auth/LogInPage';
import Dashboard from './user/Dashboard';
import NavBar from './navbar'
import WomenConnect from '../containers/wct_container'
import EventsContainer from '../containers/events_container'
import JobsContainer from '../containers/jobs_container';



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
    // console.log(this.state, this.props)
    return (
      <div className="App">
        <BrowserRouter>
        <div className="navbar">
          <NavBar /> 
           {/*if you need to pass props with Route, use render={callback function}, otherwise use component=  */}
          <Route exact path="/" component={WomenConnect} />
          <Route exact path="/events" render={props => ( <EventsContainer { ...props } user={this.state.user} />  )} />
          <Route exact path="/jobs" render={props => ( <JobsContainer { ...props } user={this.state.user} />  )} />
        </div>
        <Switch>
          {/* <Route exact path={'/'} component={Home} /> */}
          <Route 
          exact
          path={'/login'} 
          render={props => (
            <LogIn { ...props }
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
            <Dashboard { ...props }
            loggedInStatus={this.state.loggedInStatus}
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
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
