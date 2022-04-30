import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import PageSendMessage from "../PageSendMessage/PageSendMessage";
import {Route, Switch} from "react-router-dom";
import PageListMessage from "../PageListMessage/PageListMessage";
import DetailMessage from "../DetailMessage/DetailMessage";

const Content = () => {
    return (
        <div className={"content-app"}>
            <HeaderApp/>
            <Switch>
                <Route exact path={"/"} component={PageSendMessage}/>
                <Route exact path={"/listMessage"} component={PageListMessage}/>
                <Route exact path={"/detailMessage"} component={DetailMessage}/>
            </Switch>
        </div>
    );
};

export default Content;