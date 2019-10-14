import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import notesService from '../../utils/notesService';
import MemoryPage from '../../pages/MemoryPage/MemoryPage';
import NotesPage from '../../pages/NotesPage/NotesPage';
import myNotes from '../myNotes/myNotes';
import * as notesApi from './services/notes-api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      user: userService.getUser()
    };
  }
  
  async componentDidMount() {
   const notes = await notesApi.getAll()
   this.setState({
     notes: notes,
   })


    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }
    
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
    
    handleCreateNote = async newNoteData => {
      
      const newNote = await notesService.create(newNoteData);
      
      this.setState(state => ({
        notes: [...state.notes, newNote]
    }), () => this.props.history.push('/'));
    
  }

  notesUpdate = async updateNotes => {
    var updateNotes = await notesApi.update (updateNotes)
    var newNotesArray = this.state.notes.map(c =>
      c._id === updateNotes._id ? updateNotes : c 
      );
      this.setState(
        { notes: newNotesArray },
        () => this.props.history.push('/note-cards')
      );
  }
    notesDelete = async id => {
      await notesApi.deleteOne(id);
      this.setState(state => ({
        // Yay, filter returns a NEW array
        notes: state.notes.filter(c => c._id !== id)
      }), () => this.props.history.push('/note-cards'));
    }
// //   /*--- Lifecycle Methods ---*/
  }

async onSubmit(submit) {
  submit.preventDefault();
  if (!this.isFormValid()) {
    this.setState({ error: "All fields are required." });
    return;
  }
  this.setState({ error: "", loading: true });
  let { notes } = this.props;
  fetch("/Note", {
    method: "POST",
    body: JSON.stringify(notes)
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({ loading: false, error: res.error });
      } else {
        this.props.addComment(notes);
        this.setState({
          notes: { ...notes, message: "" }
        })
      }
    })
    .catch(err => {
      this.setState({
        error: "Something went wrong while trying to submit your notes",
      });
    });
}
isFormValid() {
  return this.props.notes.name !== "" && this.props.notes.message !== "";
}

render() {
    return(
    <div className ="App">
    <Switch>
      <Route exact path='/' render={()=>       
      <MemoryPage
      user = {this.state.user}
      handleLogout = {this.handleLogout}
      />
    }/>
      <Route exact path='/note-cards' render={() =>
      <NotesPage
      handleCreateNote={this.handleCreateNote}
      />
      
    }/>  
      <Route exact path='/signup' render={({ history }) => 
        <SignupPage
         history={history}
        handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/login' render={({history}) => 
       <LoginPage
       history={history}
        handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/myNotes' render={({props}) =>
      <myNotes
      notes={this.state.notes}
      handleCreateNote={this.state.handleCreateNote}
      user={this.state.user}
      notesDelete={this.notesDelete}
      />
    }/>
      
    </Switch>
  </div>
    );
  };
}
//note
export default App;