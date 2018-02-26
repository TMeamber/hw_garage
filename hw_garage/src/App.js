import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='Header'>
      <div className='Logo'>
      </div>
      <div className='upper'>
      <div className='login'>Sign up / Login
      </div>
      </div>
      </div>
        <div className='Navbar'>
        <Link to='/Profile'>
          <div className='profile'>Profile</div>
        </Link>
        </div>
      </div>
    );
  }
}

export default App;
