import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);


  // if session user exists,
  //sessionLinks help render the ProfileButton component that leads to sessionUser
  //if not
  //sessionLinks with render the sign-up link with login modal.
  //(wtf is modal)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/groups/user">MyGroups</NavLink>
        <NavLink to="/events">MyEvents</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id="top-nav-bar">
      <li>
        <h2 id="logo">ClimbUp</h2>
      </li>
      <li id="links">
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
