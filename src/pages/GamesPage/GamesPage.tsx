import React, { useMemo, useEffect, useContext } from "react";
import { Block } from "../../components/Block/Block";
import { GamesContext } from "../../hooks/useGames";
import { useParams } from "react-router-dom";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { UserContext } from "../../hooks/useCurrentUser";
import "./GamesPage.scss";

interface Props {}

export const GamesPage: React.FC<Props> = () => {
  const { games, fetchUsersGames, user, setGames } = useContext(GamesContext);
  const params = useParams();
  const userId = params.userId;
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const followUser = makeSignedRequest("PATCH", `/users/friend/${userId}`);
  useEffect(() => {
    fetchUsersGames(userId);
  }, [userId]);

  const sortedGames = useMemo(() => {
    if (games && games.length > 0) {
      const inProgress = games.filter((game: any) => game.completed === false);
      const finished = games.filter((game: any) => game.completed === true);
      const sorted = [...inProgress, ...finished];
      return sorted;
    } else {
      return [];
    }
  }, [games]);

  const onSubmit = async () => {
    const { data: updatedUser } = await followUser();
    setCurrentUser(updatedUser);
  };

  const isNotCurrentUser = userId !== currentUser._id;
  const isFriend = currentUser.friends.includes(userId);

  const displayButton = isNotCurrentUser && !isFriend;

  return (
    <div className="games-page center">
      <div className="header">
        {displayButton && (
          <div
            className="app__icon plus"
            onClick={() => onSubmit()}
            title="Add This User to My Friends"
          />
        )}
        {isFriend && (
          <div
            className="app__icon star"
            title={`${user.userName} is your friend`}
          />
        )}
        {user.userName && (
          <div className="username">{user.userName}'s Games</div>
        )}
      </div>
      <div className="blocks">
        {games.length > 0 ? (
          sortedGames.map((game) => (
            <Block
              key={game._id}
              game={game}
              completed={game.completed}
              setGames={setGames}
            />
          ))
        ) : (
          <div className="no-games">{`Looks like you don't have any games yet! Go add some by clicking the plus sign in the Navbar!`}</div>
        )}
      </div>
    </div>
  );
};
