import React, { useState } from 'react';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import StyledCreateUser from './final/StyledCreateUser';
import ViewUser from './final/ViewUser';


function App() {

  const [user, setUser] = useState(null)
  return (
    <MuiThemeProvider>
      <div className="App">
        {user !== null && <ViewUser user={user} />}
        <StyledCreateUser setUser={setUser} />

      </div>
    </MuiThemeProvider>

  );
}

export default App;
