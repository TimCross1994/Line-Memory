import React from 'react';
// import { Link } from 'react-router-dom';
import notesService from '../../utils/notesService';
import './NotesPage.css';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            line: '',
            monologue: '',
            error: false
        }
    }

    async componentDidMount() {
        const notes = await notesService.index();
        this.props.handleUpdateNotes(notes);
    }

    handleChange = (e) => {
        this.props.updateMessage('')

    }
    formRef = React.createRef() 

    hiddenError() {
        this.setState({error: !this.state.hiddenError})
    }

    render() {
        return(
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>  
            <div className='create-card'>
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
                    className = 'input-textarea-monologue'
                    id='monologue'
                    placeholder= 'input lines you are responding to'
                    value = {this.state.monologue}
                    onChange = {(e) => this.setState({monologue: e.target.value})}
                    />
                </div>
                <div className='note-input-button'>
                    <button type='submit'
                    id='add-button'
                   >
                            Add Line!
                        </button>
                    </div>
                        <div className='note-error'>
                        </div>
                    </div>
                </div>  
            </form> 
        );
    }
}





export default CreateNote;