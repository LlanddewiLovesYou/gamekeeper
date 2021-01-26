import React, { useState, useContext } from "react";
import { Game } from "../../../types/Game";
import "./Block.scss";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { useAudio } from "../../hooks/useAudio";
import { UserContext } from "../../hooks/useCurrentUser";

interface Props {
  completed: Boolean;
  game: Game;
  setGames: any;
}

export const Block: React.FC<Props> = ({ completed, game, setGames }) => {
  const [complete, setComplete] = useState(completed);
  const [hours, setHours] = useState(game.hours);
  const [lastPlayed, setLastplayed] = useState(game.lastPlayed);
  const backgroundClass = complete ? "completed" : null;
  const rogueLikeClass = game.rogueLike ? "brick" : "question";
  const AudioBoundary = useAudio("/smw_coin.wav");
  const { loggedIn, currentUser } = useContext(UserContext);

  const incrementHours = async (e: any) => {
    e.preventDefault();
    const increment = hours + 0.5;
    setHours(increment);
    setLastplayed(new Date(Date.now()).toDateString());
    const incrementRequest = makeSignedRequest("PATCH", `/games/${game._id}`, {
      hours: increment,
    });
    await incrementRequest();
  };

  const updateComplete = async (e: any) => {
    e.preventDefault();
    const completionUpdateRequest = makeSignedRequest(
      "PATCH",
      `/games/${game._id}`,
      { completed: !complete, completedOn: new Date(Date.now()).toDateString() }
    );

    const getUpdatedGames = makeSignedRequest(
      "GET",
      `/games/${currentUser._id}`
    );
    await completionUpdateRequest();
    setComplete(!complete);
    setTimeout(async () => {
      const updatedGamesResponse = await getUpdatedGames();
      const updatedGames = updatedGamesResponse.data.games;
      setGames(updatedGames);
    }, 2000);
  };

  const usersGame = loggedIn && game.userId === currentUser._id;

  return (
    <div className={"block " + backgroundClass + " " + rogueLikeClass}>
      <div className="block__flex">
        <div className="title">
          <h1>{game.title}</h1>
          <div>{game.year}</div>
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
            <div className="block__info">{hours}</div>
          </label>
          {!complete && usersGame && (
            <div
              title="Add 30 Minutes"
              className="app__icon plus"
              onClick={(e) => {
                incrementHours(e);
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
                  onClick={(e) => updateComplete(e)}
                >
                  Complete <div className="app__icon coin" />
                </button>
              </AudioBoundary>
            )
          : usersGame && (
              <AudioBoundary>
                <button
                  className="button complete-button complete"
                  onClick={(e) => updateComplete(e)}
                >
                  Resume <div className="app__icon one-up" />
                </button>
              </AudioBoundary>
            )}
      </div>
    </div>
  );
};
