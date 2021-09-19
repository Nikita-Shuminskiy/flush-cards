import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {AlertContentType, authMe, removeAlert} from "./Store/Reducers/AppReducer";
import {AppRootStateType} from "./Store/Store";
import {Alert} from './Common/Alert/Alert';
import {InitialLayout} from "./Common/InitialLayout/InitialLayout";


function App() {
    const dispatch = useDispatch()

    const alertList = useSelector<AppRootStateType, AlertContentType[]>(state => state.app.alertList)
    const initApp = useSelector<AppRootStateType, boolean>(state => state.app.initialApp)
    const closeAlet = (id: number) => dispatch(removeAlert(id))

    useEffect(() => {
        dispatch(authMe())
    }, [])


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
                            <Route path={'/entrynewpassword'} render={() => <NewPassword/>}/>
                            <Route path={'/test'} render={() => <Test/>}/>
                        </Switch>

                        {/*Alert component*/}

                        <Alert alertList={alertList} onCloseAlert={closeAlet}/>

                    </div>
            }
        </>
    );
}

//test
export default App;
