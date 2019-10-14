import React from 'react';
import './myNotes.css';
import Notes from '../Notes/Notes'
// import NotesCard from '../..components/NotesCard/NotesCard';

function myNotes(props) {
    return (
    <div className = 'listpage'>
       <h1> Notes </h1>
           {props.notes.map(notes =>
            <Notes
            key={notes._id}
            notes={notes}
            notesDelete={props.notesDelete}
            />
           )
        }
        
    </div>
)
           
}



export default myNotes 