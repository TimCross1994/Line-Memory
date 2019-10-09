import React from 'react';
import './NoteCardSub.css';
import NoteCardFront from '../NoteCardFront/NoteCardFront';
class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            line: '',
            monologue: '',
            error: false
        }
    }

    hiddenError() {
        this.setState({error: !this.state.hiddenError})
    }
    
    render() {
        const messageError = this.state.error ? 'Please add lines to memorize!'
        :'';
        return(
            <div className='create-card'>
                <NoteCardFront line={this.state.currentCard.line}

                />
                <div className='note-card__shadow'
                onClick={() => {
                    this.props.onShadowClick();
                }}
                >
            
            </div>
            <div className='note-body'>
                <h1>Add Your Lines</h1>
                <div className='note-input-line'>
                    <input
                    className = 'input-textarea-line'
                    id='line'
                    placeholder = "input the lines you want to remember"
                    value = {this.state.line}
                    onChange = {(e) => this.setState({line: e.target.value})}
                    />
                </div>
                <div className='note-input-monologue'>
                    <input 
                    // cols="50" rows="5" style="border:groove 6px black"
                    className = 'input-textarea-monologue'
                    id='monologue'
                    placeholder= 'input lines you are responding to'
                    value = {this.state.monologue}
                    onChange = {(e) => this.setState({monologue: e.target.value})}
                    />
                </div>
                <div className='note-input-button'>
                    <button
                    id='add-button'
                   >
                            Add Line!
                        </button>
                    </div>
                        <div className='note-error'>
                            {messageError}
                        </div>
                    </div>
                </div>   
        );
    }
}





export default CreateNote;