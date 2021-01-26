import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Masthead } from "../../components/Masthead/Masthead";
import { GamesContext, useGames } from "../../hooks/useGames";
import { UserForm } from "../UserForm/UserForm";
import { GamesPage } from "../../pages/GamesPage/GamesPage";
import { UserContext } from "../../hooks/useCurrentUser";
import { FriendsPage } from "../../pages/FriendsPage/FriendsPage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { LandingPage } from "../../pages/LandingPage/LandingPage";

interface Props {}

export const AppContent: React.FC<Props> = () => {
  const { loggedIn } = useContext(UserContext);
  const { games, setGames, fetchUsersGames, user } = useGames();
  return (
    <GamesContext.Provider value={{ games, setGames, fetchUsersGames, user }}>
      {/* <Router> */}
      <Masthead />
      <Switch>
        <Route exact path="/gamekeeper">
          <LandingPage />
        </Route>
        <Route path="/gamekeeper/games/:userId">
          <GamesPage />
        </Route>
        <Route path="/gamekeeper/users/search">
          <SearchPage />
        </Route>
        {!loggedIn ? (
          <Route path="/gamekeeper/login">
            <UserForm type="login" />
          </Route>
        ) : (
          <Redirect to="/gamekeeper/games" from="/gamekeeper/login" />
        )}
        {loggedIn ? (
          <Route path="/gamekeeper/friends">
            <FriendsPage />
          </Route>
        ) : (
          <Redirect to="/gamekeeper/games" from="/gamekeeper/friends" />
        )}
        {!loggedIn ? (
          <Route path="/gamekeeper/register">
            <UserForm type="register" />
          </Route>
        ) : (
          <Redirect to="/gamekeeper/games" from="/gamekeeper/register" />
        )}
      </Switch>
      {/* </Router> */}
    </GamesContext.Provider>
  );
};
