import React from "react";
import { useLogin } from "../../hooks/useLogin";
import { getDomain } from "../../util/env";

import "./UserForm.scss";

interface Props {
  type: string;
  path?: string;
}

export const UserForm: React.FC<Props> = ({ type }) => {
  let formText;
  let buttonText;
  let submitUrl;

  switch (type) {
    case "login":
      formText = "Log In";
      buttonText = "Log In";
      submitUrl = `${getDomain()}/users/login`;
      break;
    case "register":
      formText = "Create Account";
      buttonText = "Submit";
      submitUrl = `${getDomain()}/users`;
      break;
  }

  const {
    onSubmit,
    error,
    setUserName,
    userName,
    setPassword,
    password,
  } = useLogin(submitUrl);

  return (
    <div className="user-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <div>{formText}</div>
        <div className={`error ${error ? "visible" : null}`}>{error}</div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
};
