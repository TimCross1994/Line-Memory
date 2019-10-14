import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './MemoryPage.css';
import myNotes from '../myNotes/myNotes';


const MemoryPage = (props) => {
  return (
    <div className="MemoryPage">
    <NavBar 
    user = {props.user}
    handleLogout = {props.handleLogout}
    />
      <header className='header-footer'>L I N E  ||  M E M O R Y</header>
      <div className="flex-h align-flex-end">
        </div>
      <footer className='header-footer'>
      </footer>
    <div className="col-8  pt-3 bg-white"></div>
    <myNotes
    handleCreateNote={props.handleCreateNote}
    />
    </div>
  
  );

};


export default MemoryPage;