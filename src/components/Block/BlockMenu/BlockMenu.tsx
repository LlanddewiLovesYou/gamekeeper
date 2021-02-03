import React, { useState } from "react";
import "./BlockMenu.scss";

interface Props {
  deleteFunction: any;
  addFunction: any;
  usersGame: boolean;
}

export const BlockMenu: React.FC<Props> = ({
  deleteFunction,
  usersGame,
  addFunction,
}) => {
  const [open, setOpen] = useState(false);

  const deleteGame = async (e) => {
    await deleteFunction(e);
    setOpen(false);
  };

  const addGame = async (e) => {
    await addFunction(e);
    setOpen(false);
  };

  return (
    <div className="block-menu">
      <div
        className="app__icon coin icon"
        onClick={() => setOpen(!open)}
        title="Edit/Delete Game"
      />
      {open && (
        <div className="menu">
          <ul>
            <li onClick={(e) => addGame(e)}>Add to My Games</li>
            {usersGame && (
              <li className="delete" onClick={(e) => deleteGame(e)}>
                Delete
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
