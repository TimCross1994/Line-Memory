import React from 'react';
import './NoteCardFront.css';

const NoteCardFront = (props) => (
    <div className="card">
        <div className="note-front">
            <div className="your-line">{props.line}</div>
    </div>
    <div className="note-back">
        <div className="his-line">What did he say</div>
    </div>
</div>

)


export default NoteCardFront;