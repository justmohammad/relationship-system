import React, {useState} from 'react';
import '../../Config/font.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.scss';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import SidebarContext from "../Contexts/SidebarContext";

const App = () => {

    const [sidebar,setSidebar] = useState(false);

    return (
        <BrowserRouter>
            <SidebarContext.Provider value={{
                sidebar: sidebar,
                setSidebar
            }}>

            <Switch>
                <PublicRoute exact path={"/login"} component={Login}/>
                <PrivateRoute path={"/"} render={() =>
                    <div className="App">
                        <Sidebar/>
                        <Content/>
                    </div>
                }/>
            </Switch>
            </SidebarContext.Provider>
        </BrowserRouter>
    );
}

const isLogin = () => !!localStorage.getItem('name');

const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"}/>
        else
            return React.createElement(component, props);
    }}/>
}

const PrivateRoute = ({render,...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else
            return <Redirect to={"/login"}/>;
    }}/>
}

export default App;