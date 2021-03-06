import React from 'react';
// import { Link } from 'react-router-dom';
import './NotesPage.css';
import userService from '../../utils/userService';




class CreateNote extends React.Component {
    state = {
        invalidNote: true,
        noteData: {
            line: '',
            monologue: '',
            user: userService.getUser()
        }
    }
    formRef = React.createRef() 
    renderError() {
        return this.state.error ? (
            <div>{this.state.error}</div>
            ) : null;
        }
    handleSubmit =  e => {
        e.preventDefault();
        this.props.handleCreateNote(this.state.noteData);
    }
    
    handleChange = (e) => {
        const noteData = {...this.state.noteData, [e.target.name]: e.target.value};
        this.setState({
            noteData,
            invalidData: !this.formRef.current.checkValidity()
        })
    }
    render() {
        return(
           

            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>  
            <div className='note-body'>
                <h1>Add Your Lines</h1>
                <div className='note-input-line'>
                    <input
                    value={this.state.user ? this.state.user : "      Input Your Lines"
                }
                name="user"
                    ></input>
                    <div className="form-group">
                     <textarea
                    onChange={this.handleChange}
                    value = {this.state.noteData.lines}
                    name="line"
                    rows="10"
                    className = 'input-textarea-line'
                    placeholder = "input the lines you want to remember"
                    // onChange = {(e) => this.setState({line: e.target.value})}
                    />
                    </div>
                </div>
                <div className='note-input-monologue'>
                    <input 
                    name="monologue"
                    className = 'input-textarea-monologue'
                    rows="10"
                    placeholder= 'input lines you are responding to'
                    value = {this.state.noteData.monologue}
                    // onChange = {(e) => this.setState({monologue: e.target.value})}
                    onChange={this.handleChange}

                    />
                </div>
                <div className='note-input-button'>
                    <button 
                    type='submit'
                    className='add-button'
                   >
                            Add Line!
                        </button>
                        </div>
                        </div>
                    </form> 

        );
    }
}





export default CreateNote;