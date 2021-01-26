import React from "react";
import "./LandingPage.scss";

interface Props {}

export const LandingPage: React.FC<Props> = () => {
  return (
    <div className="landing-page">
      <h2>Hello! Welcome to Gamekeeper!</h2>
      <div>
        Gamekeeper was created to help track the games you play in a given year
        to help facilitate more productive GOTY disscussions
      </div>
      <div>
        If you're new here, create an account by clicking the link above. If
        you're already a user, just Login!
      </div>
    </div>
  );
};
