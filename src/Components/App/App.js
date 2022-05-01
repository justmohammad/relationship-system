import React from 'react';
import '../../Config/font.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/signup"} component={SignUp}/>
                <Route>
                    <div className="App">
                        <Sidebar/>
                        <Content/>
                    </div>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;
