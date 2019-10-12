import React from 'react';
import './myNotes.css';

function myNotes(props) {
    console.log('comment is being created')
    return (
    <div className = 'listpage'>
       <h1> Notes </h1>
           {props.notes.map(notes =>
            <NotesPage
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