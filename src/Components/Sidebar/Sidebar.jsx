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
                                <Link to={"/"}>پیام های دریافت شده</Link>
                            </li>
                            <li>
                                <Link to={"/sentMessage"}>پیام های ارسال شده</Link>
                            </li>
                            <li>
                                <Link to={"/sendMessage"}>ارسال پیام</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;