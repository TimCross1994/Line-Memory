import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NoteCardSub from '../../components/NoteCardSub/NoteCardSub';

import './MemoryPage.css';


const MemoryPage = (props) => {
  return (
    <div className="MemoryPage">
    <NavBar 
    user = {props.user}
    handleLogout = {props.handleLogout}
    />
      <header className='header-footer'>L I N E  ||  M E M O R Y</header>
      <NoteCardSub 
      user = {props.user}
      />
      
      <div className="flex-h align-flex-end">
        </div>
      <footer className='header-footer'>
      </footer>
      </div>
  
  );

};

export default MemoryPage;