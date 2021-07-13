import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Fab from '@material-ui/core/Fab';
import "./Note.css"

const Note = (props) => {

    const deleteHandeler=()=>{
        props.setnotes(props.notes.filter((el)=>(
            el.id!==props.id
        )));
    };
    const checkHandler=()=>{
        props.setnotes(props.notes.map((el)=>{
            if(el.id===props.id)
            {
                return {
                    ...el,
                    checked: !el.checked
                }
            }
            return el;
        }));
    };
    let style="note";
    if(props.item.checked)
        style+="-checked";
    return (
        <div className={style}>
            <h2>{props.title}</h2>
            <p>{props.note}</p>
            <div className="check">
                <Zoom in={true}>
                    <Fab onClick={checkHandler} className="btn"><CheckCircleRoundedIcon /></Fab>
                </Zoom>
            </div>
            <div className="delete">
                <Zoom in={true}>
                    <Fab onClick={deleteHandeler} className="btn"><DeleteIcon /></Fab>
                </Zoom>
            </div>
        </div>
    );
}
 
export default Note;