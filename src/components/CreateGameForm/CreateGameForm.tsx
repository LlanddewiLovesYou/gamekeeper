import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../hooks/useCurrentUser";
import { getToken } from "../../util/jwt";
import { GamesContext } from "../../hooks/useGames";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import "./CreateGameForm.scss";

interface Props {}

export const CreateGameForm: React.FC<Props> = () => {
  const [title, setGameTitle] = useState("");
  const [year, setGameYear] = useState("");
  const [rogueLike, setRogueLike] = useState(false);
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { fetchUsersGames } = useContext(GamesContext);
  let history = useHistory();

  const createGame = async (e: any, title: string, year: string) => {
    e.preventDefault();
    const game = {
      title,
      year,
      started: new Date(Date.now()).toDateString(),
      lastPlayed: new Date(Date.now()).toDateString(),
      hours: 0,
      completed: false,
      completedOn: "",
      userId: currentUser._id,
      rogueLike,
    };

    const gamePostRequest = makeSignedRequest(
      "POST",
      `/games/${currentUser._id}`,
      game
    );

    const newGame = await gamePostRequest();

    await fetchUsersGames(currentUser._id);
    setOpen(false);
    setGameTitle("");
    setGameYear("");
    setRogueLike(false);
    history.push(`/gamekeeper/games/${currentUser._id}`);
    return newGame;
  };

  return (
    <div className="create-game-form">
      <div
        className="app__icon plus"
        onClick={() => setOpen(!open)}
        title="Add New Game"
      />
      {open && (
        <div className="content">
          <label htmlFor="">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setGameTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Release Year:
            <input
              type="text"
              value={year}
              onChange={(e) => setGameYear(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Rogue-Like?:
            <input
              type="checkbox"
              checked={rogueLike}
              onChange={() => {
                setRogueLike(!rogueLike);
              }}
            />
          </label>
          <button onClick={(e) => createGame(e, title, year)}>
            Create Game
          </button>
        </div>
      )}
    </div>
  );
};
