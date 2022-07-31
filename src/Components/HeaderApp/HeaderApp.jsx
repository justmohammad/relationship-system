import React, {useContext, useRef, useState} from 'react';
import './HeaderApp.scss';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import {BsList} from "react-icons/bs";
import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import SidebarContext from "../Contexts/SidebarContext";
import {UploadImageProfile} from "../../Api/FunctionsApi/UpdateApi";

const HeaderApp = () => {

    const sidebarContext = useContext(SidebarContext)

    const date = new DateObject({calendar: persian, locale: persian_fa})
    const inputRef = useRef();
    const [imagePath, setImagePath] = useState();

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const getImage = () => {
        if (imagePath) {
            return imagePath;
        } else if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined') {
            return `http://relapp.freehost.io/assets/images/imageProfile/${localStorage.getItem("image")}`
        } else {
            return 'http://relapp.freehost.io/assets/images/imageProfile/profile.png';
        }
    }

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {

            const render = new FileReader();
            render.onload = (e) => {
                setImagePath(e.target.result);
            }
            render.readAsDataURL(e.target.files[0]);

            const data = new FormData();
            data.append('image', e.target.files[0]);
            data.append('id', localStorage.getItem('id'));
            data.append('email', localStorage.getItem('email'));
            UploadImageProfile(data, (isOk, data) => {
                if (isOk) localStorage.setItem('image', data)
            })
        }
    }

    const collapseSidebar = () => sidebarContext.sidebar ? sidebarContext.setSidebar(false) : sidebarContext.setSidebar(true);

    return (
        <header className={"header-app"}>
            <div className="title-app">
                <div className="header-right col-md-9">
                    <p onClick={collapseSidebar} style={{cursor: "pointer"}}><i><BsList/></i></p>
                    <p> تاریخ امروز : {date.format()}</p>
                </div>
                <div className="header-left col-md-3">
                    <div className="img-profile">
                        <img src={getImage()} alt="" width={"40px"} height={"40px"} className={"rounded-circle"}/>
                    </div>
                    <div className="name-profile">
                        <DropdownButton id="dropdown-basic-button" className={"style-button-dropdown"}
                                        title={localStorage.getItem('name')}>
                            <Dropdown.Item onClick={() => inputRef.current.click()}>آپلود عکس
                                پروفایل</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>خروج</Dropdown.Item>
                        </DropdownButton>
                        <form action="" enctype="multipart/form-data" style={{display: 'none'}}>
                            <input type="file" style={{display: 'none'}} ref={inputRef}
                                   onChange={handleAvatarChange}/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderApp;