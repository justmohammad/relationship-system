import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import SendMessage from "../SendMessage/SendMessage";
import {Route, Switch, useLocation} from "react-router-dom";
import ListMessage from "../ListMessage/ListMessage";
import DetailMessage from "../DetailMessage/DetailMessage";
import ListSentMessage from "../ListSentMessage/ListSentMessage";
import NewUser from "../NewUser/NewUser";
import Users from "../Users/Users";
import {Container} from "react-bootstrap";

const Content = () => {

    return (
        <div className={"content-app"}>
            <HeaderApp/>
            <Container className={"cont"}>
                <div className="dynamic-page">
                    <Switch>
                        <Route exact path={"/sendMessage"} component={SendMessage}/>
                        <Route exact path={"/"} component={ListMessage}/>
                        <Route exact path={"/sentMessage"} component={ListSentMessage}/>
                        <Route path={"/home/detailMessage/:id"} component={DetailMessage}/>
                        <Route path={"/sentMessage/detailMessage/:id"} component={DetailMessage}/>
                        <Route path={"/newUser"} component={NewUser}/>
                        <Route path={"/users"} component={Users}/>
                    </Switch>
                </div>
            </Container>
        </div>
    );
};

export default Content;