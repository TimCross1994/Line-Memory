import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import notesService from '../../utils/notesService';
import MemoryPage from '../../pages/MemoryPage/MemoryPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
    notes: [],
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  getNewCard() {
    return {
      note: {
        front: '',
        back: '',
        
      }
    }
  }
  
  async componentDidMount() {
    const notes = await notesService.index();
    this.setState({ notes })
  }

  

//   /*--- Lifecycle Methods ---*/

//   async componentDidMount() {
//   }

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
    </Switch>
  </div>
    );
  };
}
//note
export default App;