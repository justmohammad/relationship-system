import React, {useContext, useEffect, useState} from 'react';
import './Sidebar.scss';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link, useLocation} from "react-router-dom";
import {GetAdmin} from "../../Api/FunctionsApi/GetApi";
import {Menu, MenuItem, ProSidebar, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import {
    BsEnvelopeFill,
    BsEnvelopeOpenFill,
    BsFillCursorFill, BsFillPaletteFill,
    BsFillPersonPlusFill, BsPeopleFill
} from "react-icons/bs";
import SidebarContext from "../Contexts/SidebarContext";

const Sidebar = () => {

    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        GetAdmin((isOk,data) => {
            if (isOk) setAdmin(data)
        })
    }, [])

    const sidebarContext = useContext(SidebarContext);

    return (

        <ProSidebar breakPoint={"md"} collapsed={sidebarContext.sidebar === true} rtl>
            <SidebarHeader>
                <div className="header-panel">
                    <i><BsFillPaletteFill/></i>
                    <h5 style={{display: sidebarContext.sidebar ? "none" : "block"}}>پنل مدیریت</h5>
                </div>

            </SidebarHeader>
            <Menu iconShape="square">
                <MenuItem icon={<BsEnvelopeOpenFill />}>
                    <Link to={"/"}>پیام های دریافت شده</Link>
                </MenuItem>
                <MenuItem icon={<BsEnvelopeFill />}>
                    <Link to={"/sentMessage"}>پیام های ارسال شده</Link>
                </MenuItem>
                <MenuItem icon={<BsFillCursorFill />}>
                    <Link to={"/sendMessage"}>ارسال پیام</Link>
                </MenuItem>
                {
                    admin.map(value =>
                        <>
                <MenuItem icon={<BsPeopleFill />} className={value.name === localStorage.getItem('name') ? '' : 'hide-list'}>
                    <Link to={"/users"}>کاربران</Link>
                </MenuItem>
                <MenuItem icon={<BsFillPersonPlusFill />} className={value.name === localStorage.getItem('name') ? '' : 'hide-list'}>
                    <Link to={"/newUser"}>کاربر جدید</Link>
                </MenuItem>
                        </>
                    )
                }
            </Menu>
            <SidebarFooter className={"position-relative"} style={{top: "35%"}}>
                <p className={"d-md-flex justify-content-center"} style={{marginTop: "50px"}}>تهیه شده در استانداری مرکزی</p>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;