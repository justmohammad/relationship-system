import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import SendMessage from "../SendMessage/SendMessage";
import {Route, Switch} from "react-router-dom";
import ListMessage from "../ListMessage/ListMessage";
import DetailMessage from "../DetailMessage/DetailMessage";
import ListSentMessage from "../ListSentMessage/ListSentMessage";
import ReadMessage from "../ReadMessage/ReadMessage";
import NewUser from "../NewUser/NewUser";
import Users from "../Users/Users";
import {Container} from "react-bootstrap";

const Content = () => {
    return (
        <Container className={"content-app"}>
            <HeaderApp/>
            <Container className={"cont"}>
                <div className="dynamic-page">
                    <Switch>
                        <Route exact path={"/sendMessage"} component={SendMessage}/>
                        <Route exact path={"/"} component={ListMessage}/>
                        <Route exact path={"/sentMessage"} component={ListSentMessage}/>
                        <Route path={"/detailMessage/:id"} component={DetailMessage}/>
                        <Route path={"/sentMessage/:id"} component={ReadMessage}/>
                        <Route path={"/newUser"} component={NewUser}/>
                        <Route path={"/users"} component={Users}/>
                    </Switch>
                </div>
            </Container>
        </Container>
    );
};

export default Content;