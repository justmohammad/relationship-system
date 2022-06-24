import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import PageSendMessage from "../PageSendMessage/PageSendMessage";
import {Route, Switch} from "react-router-dom";
import PageListMessage from "../PageListMessage/PageListMessage";
import DetailMessage from "../DetailMessage/DetailMessage";
import ListSentMessage from "../ListSentMessage/ListSentMessage";
import ReadSentMessage from "../ReadSentMessage/ReadSentMessage";

const Content = () => {
    return (
        <div className={"content-app"}>
            <HeaderApp/>
            <Switch>
                <Route exact path={"/sendMessage"} component={PageSendMessage}/>
                <Route exact path={"/"} component={PageListMessage}/>
                <Route exact path={"/sentMessage"} component={ListSentMessage}/>
                <Route path={"/detailMessage/:id"} component={DetailMessage}/>
                <Route path={"/sentMessage/:id"} component={ReadSentMessage}/>
            </Switch>
        </div>
    );
};

export default Content;