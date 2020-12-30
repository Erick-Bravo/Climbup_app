import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import GroupPage from "./components/Routes/MyGroupPage";
import Messages from "./components/Routes/MessagesPage";
import CalendarPage from "./components/Routes/CalendarPage";
import EventsList from "./components/Routes/EventsList";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // && is an operator that returns first FALSEY value
  // so isLoaded return if false ...if not the switch is returned???....
  // isLoaded is a React state set on linke 11,
  // its default is false.

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/groups">
            <GroupPage />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/events">
            <EventsList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
