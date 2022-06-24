import React from 'react';
import './HeaderApp.scss';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

const HeaderApp = () => {

    const date = new DateObject({calendar: persian, locale: persian_fa})

    return (
        <header>
            <div className="title-app">
                <div className="header-right">
                    <p> تاریخ امروز : {date.format()}</p>
                </div>
                <div className="header-left">
                    <h5>استانداری مرکزی</h5>
                    <div className="img-profile">
                        <img src="/images/images.png" alt="" width={"40px"} height={"40px"} className={"rounded-circle"}/>
                    </div>
                    <div className="name-profile">
                        <p>محمدرضا براتی</p>
                    </div>
                </div>
                <div className="logout-btn">
                    <button className={"btn btn-danger btn-sm"}>خروج</button>
                </div>
            </div>
        </header>
    );
};

export default HeaderApp;