import React from 'react';
// import { Link } from 'react-router-dom';
import './NotesPage.css';

class CreateNote extends React.Component {
        state = {
        invalidNote: true,
            noteData: {
            line: '',
            monologue: '',
        }
    }
    formRef = React.createRef() 

    handleSubmit =  e => {
        e.preventDefault();
        console.log('hello')
        this.props.handleCreateNote(this.state.noteData);
        console.log('hello again')
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
                    name="line"
                    className = 'input-textarea-line'
                    id='line'
                    placeholder = "input the lines you want to remember"
                    value = {this.state.line}
                    // onChange = {(e) => this.setState({line: e.target.value})}
                    onChange={this.handleChange}
                    />
                </div>
                <div className='note-input-monologue'>
                    <input 
                    name="monologue"
                    className = 'input-textarea-monologue'
                    id='monologue'
                    placeholder= 'input lines you are responding to'
                    value = {this.state.monologue}
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