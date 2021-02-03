import React, { useState } from "react";
import { getDomain } from "../util/env";
import Axios from "axios";

export const GamesContext = React.createContext(undefined);

export const useGames = () => {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({ userName: "" });

  const fetchUsersGames = async (userId: string) => {
    const gamesResponse = await Axios.get(`${getDomain()}/my-games/${userId}`);
    setGames(gamesResponse.data.games);
    setUser(gamesResponse.data.user);
  };

  return { games, setGames, fetchUsersGames, user };
};
