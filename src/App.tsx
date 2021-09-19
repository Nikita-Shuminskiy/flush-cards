import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Registration } from './Pages/Registration/Registration';
import { PasswordRecovery } from './Pages/PasswordRecovery/PasswordRecovery';
import { NewPassword } from './Pages/EnteringNewPassword/NewPassword';
import { GlobalError } from './Common/Error/GlobalError';
import Test from './Common/Test/Test';
import NavBar from './Pages/NavBar/NavBar';
import { Profile } from './Pages/Profile/Profile';


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Switch>
        <Route path={'/login'} render={() => <Login/>} />
        <Route path={'/registration'} render={() => <Registration/>}/>
        <Route path={'/profile'} render={() => <Profile/>}/>
        <Route path={'/404'} render={() => <GlobalError/>}/>
        <Route path={'/recoverypassword'} render={() => <PasswordRecovery/>}/>
        <Route path={'/set-new-password'} render={() => <NewPassword />}/>
        <Route path={'/test'} render={() => <Test/>}/>
      </Switch>
    </div>
  );
}
//test
export default App;
