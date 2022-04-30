import React from 'react';
import '../../Config/font.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import HeaderApp from "../HeaderApp/HeaderApp";
import PageSendMessage from "../PageSendMessage/PageSendMessage";
import Content from "../Content/Content";

const App = () => {
    return (
        <div className="App">
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
