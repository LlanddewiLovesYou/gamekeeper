import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../hooks/useCurrentUser";
import { PLATFORM_OPTIONS } from "../../util/platforms";
import { GamesContext } from "../../hooks/useGames";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import "./CreateGameForm.scss";

interface Props {}

export const CreateGameForm: React.FC<Props> = () => {
  const [title, setGameTitle] = useState("");
  const [year, setGameYear] = useState("");
  const [rogueLike, setRogueLike] = useState(false);
  const [platform, setPlatform] = useState("");
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { fetchUsersGames } = useContext(GamesContext);
  let history = useHistory();

  const createGame = async (e: any, title: string, year: string) => {
    e.preventDefault();
    const game = {
      title,
      year,
      rogueLike,
      platform,
    };

    const gamePostRequest = makeSignedRequest(
      "POST",
      `/my-games/${currentUser._id}`,
      { game }
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
            Platform:
            <select onChange={(e) => setPlatform(e.target.value)}>
              <option value=""> - </option>
              {PLATFORM_OPTIONS.map((platform) => {
                return <option value={platform}>{platform}</option>;
              })}
            </select>
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
