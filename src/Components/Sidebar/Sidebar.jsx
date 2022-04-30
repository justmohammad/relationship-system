import React from 'react';
import './Sidebar.scss';

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
                                <a href="">ارسال پیام</a>
                            </li>
                            <li>
                                <a href="">پیام ها</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;