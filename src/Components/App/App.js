import React from 'react';
import '../../Config/font.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;
