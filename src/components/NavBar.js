import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {
  return (
    <div>
    <div className="navbar">
    <NavLink to="/"  style={link} activStyle={{ background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/movies" exact style={link} activStyle={{ background: 'darkblue' }}>Movies</NavLink>
    <NavLink to="/directors" exact style={link} activStyle={{ background: 'darkblue' }}>Directors</NavLink>
    <NavLink to="/actors" exact style={link} activStyle={{ background: 'darkblue' }}>Actors</NavLink>
    </div>
    </div>
  );
};

export default NavBar;