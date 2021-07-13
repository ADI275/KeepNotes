import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import "./Form.css";

const Form = (props) => {
    const inputTitleHandler=(event)=>{
        props.setinputTitle(event.target.value);
    };
    const inputNoteHandler=(event)=>{
        props.setinputNote(event.target.value);
    };
    const submitHandeler=()=>{
        props.setnotes([
            ...props.notes,
            {
                inputTitle: props.inputTitle,
                inputNote: props.inputNote,
                id: props.inputTitle+props.inputNote,
                checked: false
            }
        ]);
        props.setinputNote("");
        props.setinputTitle("");
        setexpanded(false);
    };
    const [expanded,setexpanded]=useState(false);
    const expandHandler=()=>{
        setexpanded(true);
    };
    const statusHandeler=(event)=>{
        props.setstatus(event.target.value);
    };

    return (
        <div className="form">
            {expanded&&<textarea onChange={inputTitleHandler} value={props.inputTitle} className="text-area-title" placeholder="Title"></textarea>}
            <textarea onClick={expandHandler} onChange={inputNoteHandler} 
                value={props.inputNote} className="text-area-note" placeholder="Note" rows={expanded?5:1}></textarea>
            <Zoom in={expanded}>
                <Fab type="submit" onClick={submitHandeler}><AddIcon /></Fab>
            </Zoom>
            <div>
                <div className="select">
                    <select onChange={statusHandeler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
 
export default Form;