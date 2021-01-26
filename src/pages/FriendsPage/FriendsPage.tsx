import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../hooks/useCurrentUser";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { Friend } from "../../components/Friend/Friend";
import "./FriendsPage.scss";

interface Props {}

export const FriendsPage: React.FC<Props> = () => {
  const { currentUser } = useContext(UserContext);
  const [friends, setFriends] = useState<any>([]);

  useEffect(() => {
    const getFriends = async () => {
      const friendRequest = makeSignedRequest(
        "GET",
        `/users/friends/${currentUser._id}`
      );
      const friendResponse = await friendRequest();
      setFriends(friendResponse.data);
    };
    getFriends();
  }, []);

  return (
    <div className="friends-page">
      <div className="header">{currentUser.userName}'s Friends</div>
      <div className="friends">
        {friends.map((friend: any) => (
          <Friend friend={friend} key={friend._id} />
        ))}
      </div>
    </div>
  );
};
