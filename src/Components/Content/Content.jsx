import React from 'react';
import './Content.scss';
import HeaderApp from "../HeaderApp/HeaderApp";
import PageSendMessage from "../PageSendMessage/PageSendMessage";

const Content = () => {
    return (
        <div className={"content-app"}>
            <HeaderApp/>
            <PageSendMessage/>
        </div>
    );
};

export default Content;