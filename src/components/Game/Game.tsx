import React, { useEffect, useContext } from "react";
import { GameEntry as GameType } from "../../../types/Game";
import { useHistory } from "react-router-dom";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { UserContext } from "../../hooks/useCurrentUser";
import "./Game.scss";
import { useGames } from "../../hooks/useGames";

interface Props {
  game: GameType;
}

export const Game: React.FC<Props> = ({ game }) => {
  const { loggedIn, currentUser } = useContext(UserContext);
  const { games, fetchUsersGames } = useGames();
  let history = useHistory();

  useEffect(() => {
    fetchUsersGames(currentUser._id);
  }, []);

  const isUsersGame =
    loggedIn && !!games.find((entry) => entry.gameId === game._id);

  const addGameRequest = makeSignedRequest(
    "POST",
    `/my-games/${currentUser._id}?gameId=${game._id}`
  );

  const addGame = async (e) => {
    e.preventDefault();
    await addGameRequest();
    history.push(`/gamekeeper/games/${currentUser._id}`);
  };

  return (
    <div className="game">
      <div className="header">
        <div className="app__icon coin" />
        <div>
          <div className="username">{game.title}</div>
          <div>{game.platform}</div>
          <div>{game.year}</div>
        </div>
        {!isUsersGame ? (
          <div
            className="app__icon plus"
            onClick={(e) => addGame(e)}
            title="Add Friend"
          />
        ) : (
          <div className="app__icon" />
        )}
      </div>
    </div>
  );
};
