import React, { useState, useContext } from "react";
import { GameEntry } from "../../../types/Game";
import { useHistory } from "react-router-dom";
import "./Block.scss";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { useAudio } from "../../hooks/useAudio";
import { UserContext } from "../../hooks/useCurrentUser";
import { BlockMenu } from "./BlockMenu/BlockMenu";

interface Props {
  completed: Boolean;
  game: GameEntry;
  setGames: any;
}

export const Block: React.FC<Props> = ({ completed, game, setGames }) => {
  const [complete, setComplete] = useState(completed);
  const [hours, setHours] = useState(game.hours.toString());
  const [editing, setEditing] = useState(false);
  const [lastPlayed, setLastplayed] = useState(game.lastPlayed);
  const backgroundClass = complete ? "completed" : null;
  const rogueLikeClass = game.rogueLike ? "brick" : "question";
  const AudioBoundary = useAudio("/smw_coin.wav");
  const { loggedIn, currentUser } = useContext(UserContext);
  const history = useHistory();

  const updateHours = async (e: any) => {
    e.preventDefault();
    if (editing) {
      setLastplayed(new Date(Date.now()).toDateString());
      const incrementRequest = makeSignedRequest(
        "PATCH",
        `/my-games/${game._id}`,
        {
          hours: parseInt(hours),
        }
      );
      await incrementRequest();
    }
    setEditing(!editing);
  };

  const toggleComplete = async (e: any) => {
    e.preventDefault();

    const completionUpdateRequest = makeSignedRequest(
      "PATCH",
      `/my-games/${game._id}`,
      { completed: !complete, completedOn: new Date(Date.now()).toDateString() }
    );

    const getUpdatedGames = makeSignedRequest(
      "GET",
      `/my-games/${currentUser._id}`
    );
    await completionUpdateRequest();
    setComplete(!complete);
    setTimeout(async () => {
      const updatedGamesResponse = await getUpdatedGames();
      const updatedGames = updatedGamesResponse.data.games;
      setGames(updatedGames);
    }, 2000);
  };

  const deleteGame = async (e) => {
    e.preventDefault();
    const deleteGameRequest = makeSignedRequest(
      "DELETE",
      `/my-games/${game._id}`
    );

    const getUpdatedGames = makeSignedRequest(
      "GET",
      `/my-games/${currentUser._id}`
    );
    await deleteGameRequest();
    const updatedGamesResponse = await getUpdatedGames();
    const updatedGames = updatedGamesResponse.data.games;
    setGames(updatedGames);
  };

  const addToMyGames = async (e) => {
    // need to fix
    e.preventDefault();

    const copiedGame = {
      title: game.title,
      year: game.year,
      rogueLike: game.rogueLike || false,
      started: new Date(Date.now()).toDateString(),
      lastPlayed: new Date(Date.now()).toDateString(),
      hours: 0,
      completed: false,
      completedOn: "",
      userId: currentUser._id,
    };

    const addRequest = makeSignedRequest(
      "POST",
      `/my-games/${currentUser._id}?gameId=${game.gameId}`,
      copiedGame
    );
    await addRequest();
    history.push(`/gamekeeper/games/${currentUser._id}`);
  };

  const usersGame = loggedIn && game.userId === currentUser._id;

  return (
    <div className={"block " + backgroundClass + " " + rogueLikeClass}>
      <div className="block__flex">
        <div className="title">
          <div>
            <h1>{game.title}</h1>
            <div>{game.platform}</div>
            <div>{game.year}</div>
          </div>
          <BlockMenu
            deleteFunction={deleteGame}
            usersGame={usersGame}
            addFunction={addToMyGames}
          />
        </div>

        <div>
          <label className="block__label">
            Started On:
            <div className="block__info">{game.started}</div>
          </label>
          <label className="block__label">
            Last Played:
            <div className="block__info">{lastPlayed}</div>
          </label>
        </div>

        <div className="hours">
          <label className="block__label">
            Hours Played:
            {editing ? (
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            ) : (
              <div className="block__info">{hours}</div>
            )}
          </label>
          {!complete && usersGame && (
            <div
              title="Add Play Time"
              className="app__icon plus"
              onClick={(e) => {
                updateHours(e);
              }}
            />
          )}
        </div>

        {complete && (
          <label htmlFor="" className="block__label">
            Completed:
            <div className="block__info">{game.completedOn}</div>
          </label>
        )}

        {!complete
          ? usersGame && (
              <AudioBoundary>
                <button
                  className="button complete-button"
                  onClick={(e) => toggleComplete(e)}
                >
                  Complete <div className="app__icon coin" />
                </button>
              </AudioBoundary>
            )
          : usersGame && (
              <AudioBoundary>
                <button
                  className="button complete-button complete"
                  onClick={(e) => toggleComplete(e)}
                >
                  Resume <div className="app__icon one-up" />
                </button>
              </AudioBoundary>
            )}
      </div>
    </div>
  );
};
