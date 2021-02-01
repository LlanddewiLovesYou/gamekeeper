import React, { useState } from "react";
import "./BlockMenu.scss";

interface Props {
  deleteFunction: any;
}

export const BlockMenu: React.FC<Props> = ({ deleteFunction }) => {
  const [open, setOpen] = useState(false);

  const deleteGame = async (e) => {
    await deleteFunction(e);
    setOpen(false);
  };
  return (
    <div className="block-menu">
      <div
        className="app__icon goomba icon"
        onClick={() => setOpen(!open)}
        title="Edit/Delete Game"
      />
      {open && (
        <div className="menu">
          <ul>
            <li className="delete" onClick={(e) => deleteGame(e)}>
              Delete
            </li>
            {/* <li>Edit </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};
