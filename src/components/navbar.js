import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#801336',
  textDecoration: 'none',
  color: 'white',
}
const NavBar = () => {
  return (
    <div className="navbar">
        
      <NavLink
        to="/"
        exact 
        style={link}
        activeStyle={{
          background: "#EE4540"
        }}
      >Home</NavLink>

      <NavLink
        to="/dashboard"
        exact 
        style={link}
        activeStyle={{
          background: "#EE4540"
        }}
      >Dashboard</NavLink>

      <NavLink
        to="/connect"
        exact
        style={link}
        activeStyle={{
          background: "#EE4540"
        }}
      >Women Connect In Tech</NavLink>

        <NavLink
            to="/events"
            exact
            style={link}
            activeStyle={{
            background: "#EE4540"
            }}
        >Events</NavLink>

        <NavLink
            to="/jobs"
            exact
            style={link}
            activeStyle={{
            background: "#EE4540"
            }}
        >Jobs</NavLink>

    </div>
  );
};

export default NavBar;
