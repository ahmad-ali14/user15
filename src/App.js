import React from 'react';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CreateUser from './final/CreateUser.jsx'
import SignUp from './final/signUp';
import StyledCreateUser from './final/StyledCreateUser';


function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        {/* <CreateUser /> */}
        {/* <SignUp /> */}
        <StyledCreateUser />
      </div>
    </MuiThemeProvider>

  );
}

export default App;
