import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#101357',
  textDecoration: 'none',
  color: 'white',
}
const NavBar = () => {
  return (
    <div className="navbar-top">
        
      <NavLink
        to="/"
        exact 
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      >Home</NavLink>

      <NavLink
        to="/dashboard"
        exact 
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      >Dashboard</NavLink>

      <NavLink
        to="/connect"
        exact
        style={link}
        activeStyle={{
          background: "#fbaf08"
        }}
      >Women Connect In Tech</NavLink>

        <NavLink
            to="/events"
            exact
            style={link}
            activeStyle={{
            background: "#fbaf08"
            }}
        >Events</NavLink>

        <NavLink
            to="/jobs"
            exact
            style={link}
            activeStyle={{
            background: "#fbaf08"
            }}
        >Jobs</NavLink>

    </div>
  );
};

export default NavBar;
