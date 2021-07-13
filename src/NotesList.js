import React from 'react';
import "./Notelist.css";
import Note from "./components/Note"

const Noteslist = (props) => {
    return (
        <div className="Note">
            {props.filterednotes.map(note=>(
                note.id&&<Note
                    key={note.id}
                    id={note.id}
                    item={note}
                    title={note.inputTitle}
                    note={note.inputNote}
                    notes={props.notes}
                    setnotes={props.setnotes} />
            ))}
        </div>
    );
}
 
export default Noteslist;