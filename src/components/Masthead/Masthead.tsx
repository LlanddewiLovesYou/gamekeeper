import React, { useContext } from "react";
import { UserContext } from "../../hooks/useCurrentUser";
import { Link } from "react-router-dom";
import "./Masthead.scss";
import { CreateGameForm } from "../CreateGameForm/CreateGameForm";

interface Props {}

export const Masthead: React.FC<Props> = () => {
  const { loggedIn, currentUser } = useContext(UserContext);
  return (
    <div className="masthead">
      <div className="title">Gamekeeper</div>
      {loggedIn ? (
        <div className="logged-in">
          <Link to="/gamekeeper/users/search">
            <div className="app__icon mag" title="Find A Friend" />
          </Link>
          <Link to="/gamekeeper/friends">
            <div className="app__icon star" title="My Friends" />
          </Link>
          <CreateGameForm />
          <span title="My Games">
            Welcome,{" "}
            <Link to={`/gamekeeper/games/${currentUser?._id}`}>
              {currentUser?.userName}
            </Link>
          </span>
        </div>
      ) : (
        <div className="login">
          <Link to="/gamekeeper/register">Create New User</Link>
          <Link to="/gamekeeper/login">Login</Link>
        </div>
      )}
    </div>
  );
};
