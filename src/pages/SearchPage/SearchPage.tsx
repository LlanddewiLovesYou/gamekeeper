import React, { FormEvent, useContext, useState } from "react";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { Friend } from "../../components/Friend/Friend";
import { User } from "../../../types/User";
import { GameEntry as GameType } from "../../../types/Game";
import { Game } from "../../components/Game/Game";
import { UserContext } from "../../hooks/useCurrentUser";
import "./SearchPage.scss";

interface Props {}

export const SearchPage: React.FC<Props> = () => {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const { currentUser } = useContext(UserContext);
  const searchRequest = makeSignedRequest("GET", `/search?q=${query}`);

  const search = async (e: FormEvent) => {
    e.preventDefault();
    const { data: searchResults } = await searchRequest();
    setUsers(searchResults.userResults);
    setGames(searchResults.gameResults);
  };

  return (
    <div className="search-page">
      <form onSubmit={(e) => search(e)}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search Gamekeeper</button>
      </form>
      <div className="results">
        {users.length > 0 && (
          <div>
            <label className="result-label">Users:</label>
            {users.map((user: User) => {
              return user._id === currentUser._id ? null : (
                <Friend friend={user} />
              );
            })}
          </div>
        )}
        {games.length > 0 && (
          <div>
            <label className="result-label">entries:</label>
            <div className="entries">
              {games.map((game: GameType) => {
                return <Game game={game} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
