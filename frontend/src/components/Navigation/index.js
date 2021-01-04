import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;

    //  <NavLink to=`/groups/user${id}/mygroups`>MyGroups</NavLink>
    //  <NavLink to=`/events/user${id}/myevents`>MyEvents</NavLink>

  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/groups/user/mygroups">MyGroups</NavLink>
        <NavLink to="/events/user/myevents">MyEvents</NavLink>
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
      <NavLink to="/">
        <li>
          <h2 id="logo">ClimbUp</h2>
        </li>
      </NavLink>
      <li id="links">
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
