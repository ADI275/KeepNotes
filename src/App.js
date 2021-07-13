import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Noteslist from './NotesList';
import Form from './components/Form';
import "./App.css";

const App = () => {
    const [inputTitle,setinputTitle]=useState("");
    const [inputNote,setinputNote]=useState("");
    const [notes,setnotes]=useState([]);
    const [filterednotes,setfilterednotes]=useState([]);
    const [status,setstatus]=useState("all");
    useEffect(()=>{
        const filterHandler=()=>{
            if(status==="completed")
                setfilterednotes(notes.filter(note=>note.checked===true));
            else if(status==="uncompleted")
                setfilterednotes(notes.filter(note=>note.checked===false));
            else
                setfilterednotes(notes);
        };
        filterHandler();
    },[notes,status]);
    return (
      <React.Fragment>
          <Navbar />
          <Form inputTitle={inputTitle}
            setinputTitle={setinputTitle}
            inputNote={inputNote}
            setinputNote={setinputNote}
            notes={notes}
            setnotes={setnotes}
            setstatus={setstatus} />
            <Noteslist 
                notes={notes}
                setnotes={setnotes}
                filterednotes={filterednotes}
                setfilterednotes={setfilterednotes} />
          <Footer />
      </React.Fragment>
  );
}
 
export default App;