import React from 'react';
import './App.css';

// import component
import Header from '../layout/header/Header';
import Sidebar from '../layout/navbar/Sidebar'
import Account from '../account/Account'
import { NotificationContainer } from 'react-notifications';

class App extends React.Component {

  render() {
    
    return (
      <div id="body-main">
          <Header />
          <Sidebar />
          <div id="body-content">
              <Account />
          </div>
          <NotificationContainer />
      </div>
    );
  }
}

export default App;
