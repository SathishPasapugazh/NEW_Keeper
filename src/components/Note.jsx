import React from "react";
import Fab from '@mui/material/Fab';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick} title="Delete Note" ><DeleteRoundedIcon /></Fab>
    </div>
  );
}

export default Note;
