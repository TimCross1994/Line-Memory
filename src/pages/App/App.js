import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import MemoryPage from '../../pages/MemoryPage/MemoryPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }



  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

//   /*--- Lifecycle Methods ---*/

//   async componentDidMount() {
//   }

render() {
    return(
    <div className ="App">
      <header className='header-footer'>L I N E  ||  M E M O R Y</header>
      {/* <Navbar /> */}
      <MemoryPage/>
    <Switch>
      <Route exact path='/settings' render={props => 
        <SettingsPage
          {...props} 
          difficulty={this.state.difficulty}
          handleDifficultyChange={this.handleDifficultyChange}
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