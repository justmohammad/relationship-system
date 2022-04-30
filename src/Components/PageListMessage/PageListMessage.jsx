import React from 'react';
import './PageListMessage.scss';
import {Link} from "react-router-dom";
import {BsFileText, BsTrash} from "react-icons/bs";

const PageListMessage = () => {
    return (
        <div className={"list-message"} id={"list-message"}>
            <label htmlFor="search-message">جستجو :</label>
            <input type="search" id={"search-message"} className={"form-control"}/>
            <label htmlFor="list-message">لیست پیام ها</label>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">از طرف</th>
                    <th scope="col">عنوان</th>
                    <th scope="col">تاریخ</th>
                    <th scope="col">حذف و جزئیات</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>1401/2/10</td>
                    <td>
                        <i>
                            <button><BsTrash/></button>
                            <button><Link to={"/detailMessage"}><BsFileText className={"text-primary"}/></Link></button>
                        </i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>1401/2/10</td>
                    <td>
                        <i>
                            <button><BsTrash/></button>
                            <button><Link to={"/detailMessage"}><BsFileText className={"text-primary"}/></Link></button>
                        </i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>1401/2/10</td>
                    <td>
                        <i>
                            <button><BsTrash/></button>
                            <button><Link to={"/detailMessage"}><BsFileText className={"text-primary"}/></Link></button>
                        </i>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PageListMessage;