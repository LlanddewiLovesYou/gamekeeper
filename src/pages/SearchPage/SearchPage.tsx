import React, { FormEvent, useContext, useState } from "react";
import { makeSignedRequest } from "../../util/makeSignedRequest";
import { Friend } from "../../components/Friend/Friend";
import { User } from "../../../types/User";
import { UserContext } from "../../hooks/useCurrentUser";
import "./SearchPage.scss";

interface Props {}

export const SearchPage: React.FC<Props> = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const { currentUser } = useContext(UserContext);
  const searchRequest = makeSignedRequest("GET", `/users/search?q=${query}`);

  const search = async (e: FormEvent) => {
    e.preventDefault();
    const { data: searchResults } = await searchRequest();
    setUsers(searchResults);
  };

  return (
    <div className="search-page">
      <form onSubmit={(e) => search(e)}>
        <label htmlFor="">
          Search Users:
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </label>
        <button type="submit">
          Search Friends <div className="app__icon mag" />
        </button>
      </form>
      <div className="results">
        {users.map((user: User) => {
          return user._id === currentUser._id ? null : <Friend friend={user} />;
        })}
      </div>
    </div>
  );
};
