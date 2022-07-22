import React, {useRef, useState} from 'react';
import './HeaderApp.scss';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import {BsList} from "react-icons/bs";
import {DropdownButton} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";

const HeaderApp = () => {

    const inputRef = useRef();
    const [imageFile, setImageFile] = useState();
    const [imagePath, setImagePath] = useState();

    const date = new DateObject({calendar: persian, locale: persian_fa})

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const getImage = () => {
        /*if (imagePath)
            return imagePath;
        if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
            return localStorage.getItem("image");*/
        return '/images/images.png';
    }

    const handleAvatarChange = (e) => {
        /*if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);

            const render = new FileReader();
            render.onload = (e) => {
                setImagePath(e.target.result);
            }
            render.readAsDataURL(e.target.files[0]);

            console.log(e.target.files[0])
            const data = new FormData();
            data.append('image', e.target.files[0]);
            //data.append('id', localStorage.getItem("id"));
            axios.post(`http://relapp.freehost.io/rest/apiupdateprofile.php`, data)
                .catch(error => console.log(error))
            localStorage.setItem('image', e.target.files[0]);

        }*/
    }

    return (
        <header className={"header-app"}>
            <div className="title-app">
                <div className="header-right">
                    <p><i><BsList/></i></p>
                    <p> تاریخ امروز : {date.format()}</p>
                </div>
                <div className="header-left">
                    <h5>استانداری مرکزی</h5>
                    <div className="img-profile">
                        <img src={getImage()} alt="" width={"40px"} height={"40px"} className={"rounded-circle"}/>
                    </div>
                    <div className="name-profile">
                        <DropdownButton id="dropdown-basic-button" className={"style-button-dropdown"}
                                        title={localStorage.getItem('name')}>
                            <Dropdown.Item onClick={() => inputRef.current.click()}>آپلود عکس پروفایل</Dropdown.Item>
                            <Dropdown.Item onClick={logout}>خروج</Dropdown.Item>
                        </DropdownButton>
                        <form action="" enctype="multipart/form-data" style={{display: 'none'}}>
                            <input type="file" style={{display: 'none'}} ref={inputRef} onChange={handleAvatarChange}/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderApp;