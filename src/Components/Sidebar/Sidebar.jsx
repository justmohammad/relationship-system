import React, {useEffect, useState} from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";
import axios from "axios";

const Sidebar = () => {

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apigetadmin.php")
            .then(Response => {
                const data = Response.data;
                setAdmin(data);
            })
            .catch(error => console.log(error))
    }, [])

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
                            {
                                admin.map(value =>
                                <>
                                    <li className={value.name === localStorage.getItem('name') ? '' : 'hide-list'}>
                                        <Link to={"/users"}>کاربران</Link>
                                    </li>
                                    <li className={value.name === localStorage.getItem('name') ? '' : 'hide-list'}>
                                        <Link to={"/newUser"}>کاربر جدید</Link>
                                    </li>
                                </>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;