import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import PageSendMessage from "../PageSendMessage/PageSendMessage";
import {Route, Switch} from "react-router-dom";
import PageListMessage from "../PageListMessage/PageListMessage";

const Content = () => {
    return (
        <div className={"content-app"}>
            <HeaderApp/>
            <Switch>
                <Route exact path={"/"} component={PageSendMessage}/>
                <Route exact path={"/listMessage"} component={PageListMessage}/>
            </Switch>
        </div>
    );
};

export default Content;