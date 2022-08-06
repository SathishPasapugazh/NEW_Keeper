import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import NoteAddIcon from '@mui/icons-material/NoteAdd';



function CreateArea(props) {

const [note, setNote] = useState({
    title: "",
    content: ""
  });
const [hide, setHide]=useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setHide(false)
    event.preventDefault();
  }
 
function handleClick() {

  setHide(true);
    //console.log(hide);
}

  return (
    <div>
      <form className="create-note">
        {hide&&<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Write a note..."
          rows={hide? 3:1}
        />
        <Zoom in={hide}><Fab color="primary" onClick={submitNote} title="Add Note" alt="Add Note"><NoteAddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
