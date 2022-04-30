import React from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar">
                <div className="title-sidebar">
                    <h5>پنل مدیریت</h5>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/listMessage"}>پیام ها</Link>
                            </li>
                            <li>
                                <Link to={"/"}>ارسال پیام</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;