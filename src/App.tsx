import React, { useEffect } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Login} from './Pages/Login/Login';
import {Registration} from './Pages/Registration/Registration';
import {PasswordRecovery} from './Pages/PasswordRecovery/PasswordRecovery';
import {NewPassword} from './Pages/EnteringNewPassword/NewPassword';
import {GlobalError} from './Common/Error/GlobalError';
import Test from './Common/Test/Test';
import NavBar from './Pages/NavBar/NavBar';
import {Profile} from './Pages/Profile/Profile';
import {CheckEmail} from './Pages/PasswordRecovery/CheckEmail/CheckEmail';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './Store/Store';
import {AlertContentType, authMe, removeAlert} from './Store/Reducers/AppReducer';
import {Alert} from './Common/Alert/Alert';
import {InitialLayout} from './Common/InitialLayout/InitialLayout';
import {Cards} from './Pages/Cards/Cards';
import {Deck} from './Pages/Deck/Deck';


function App() {
    //test
    const dispatch = useDispatch()
    const alertList = useSelector<AppRootStateType, AlertContentType[]>(state => state.app.alertList)
    const initApp = useSelector<AppRootStateType, boolean>(state => state.app.initialApp)
    const closeAlet = (id: number) => dispatch(removeAlert(id))

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])


    return (
      <>
          {
              !initApp ? <InitialLayout/>
                  :
                  <div className="App">
                      <NavBar/>
                      <Switch>
                          <Route path={'/login'} render={() => <Login/>}/>
                          <Route path={'/registration'} render={() => <Registration/>}/>
                          <Route path={'/profile'} render={() => <Profile/>}/>
                          <Route path={'/404'} render={() => <GlobalError/>}/>
                          <Route path={'/recoverypassword'} render={() => <PasswordRecovery/>}/>
                          <Route path={'/set-new-password/:token'} render={() => <NewPassword/>}/>
                          <Route path={'/check-email'} render={() => <CheckEmail/>}/>
                          <Route path={'/test'} render={() => <Test/>}/>
                          <Route path={'/cards'} render={() => <Cards/>}/>
                          <Route path={'/deck'} render={() => <Deck/>}/>

                      </Switch>

                      <Alert alertList={alertList} onCloseAlert={closeAlet}/>
                  </div>
          }
      </>
    );
}

//test
export default App;
