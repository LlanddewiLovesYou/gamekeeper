import React, { FormEvent, useContext } from "react";
import { User } from "../../../types/User";
import { Link, useHistory } from "react-router-dom";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { UserContext } from "../../hooks/useCurrentUser";
import "./Friend.scss";

interface Props {
  friend: User;
}

export const Friend: React.FC<Props> = ({ friend }) => {
  const { setCurrentUser, loggedIn, currentUser } = useContext(UserContext);
  const isFriend = loggedIn && currentUser.friends.includes(friend._id);
  let history = useHistory();

  const unfriendRequest = makeSignedRequest(
    "PATCH",
    `/users/unfriend/${friend._id}`
  );

  const addFriendRequest = makeSignedRequest(
    "PATCH",
    `/users/friend/${friend._id}`
  );

  const unfriend = async (e: FormEvent) => {
    e.preventDefault();
    const unfriendResponse = await unfriendRequest();
    setCurrentUser(unfriendResponse.data);
  };

  const addFriend = async (e: FormEvent) => {
    e.preventDefault();
    const addFriendResponse = await addFriendRequest();
    setCurrentUser(addFriendResponse.data);
    history.push("/gamekeeper/friends");
  };

  return (
    <div className="friend">
      <div className="header">
        <div className="app__icon mario" />
        <Link to={`/gamekeeper/games/${friend._id}`}>
          <div>
            <div className="username">{friend.userName}</div>
            <div>{new Date(friend.createdAt).toDateString()}</div>
          </div>
        </Link>
        {isFriend ? (
          <div
            className="app__icon goomba"
            onClick={(e) => unfriend(e)}
            title="Remove From Friends"
          ></div>
        ) : (
          <div
            className="app__icon plus"
            onClick={(e) => addFriend(e)}
            title="Add Friend"
          />
        )}
      </div>
    </div>
  );
};
