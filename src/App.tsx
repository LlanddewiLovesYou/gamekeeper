import React, { useEffect } from "react";
import "./App.css";
import { useCurrentUser, UserContext } from "./hooks/useCurrentUser";
import { AppContent } from "./components/AppContent/AppContent";
import { useHistory } from "react-router-dom";

function App() {
  const {
    currentUser,
    setCurrentUser,
    validateUser,
    loggedIn,
    setLoggedIn,
  } = useCurrentUser();

  const history = useHistory();
  const currentUserId = currentUser?._id;

  useEffect(() => {
    const userValidationSequence = async () => {
      await validateUser();
      if (currentUserId) {
        history.push(`/gamekeeper/games/${currentUserId}`);
      }
    };
    userValidationSequence();
  }, [currentUserId]);

  return (
    <div className="App">
      <div className="app__background">
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn }}
        >
          <AppContent />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
