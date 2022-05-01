import React from 'react';
import './PageListMessage.scss';
import {Link} from "react-router-dom";
import {BsFileText, BsTrash} from "react-icons/bs";

const PageListMessage = () => {

    const message = [
        {
            id: 1,
            from: 'سازمان هواشناسی',
            subject: 'وضعیت بد هوا',
            date: '1401/2/10',
        },
        {
            id: 2,
            from: 'سازمان هواشناسی',
            subject: 'وضعیت بد هوا',
            date: '1401/2/10',
        },
        {
            id: 3,
            from: 'سازمان هواشناسی',
            subject: 'وضعیت بد هوا',
            date: '1401/2/10',
        },
        {
            id: 4,
            from: 'سازمان هواشناسی',
            subject: 'وضعیت بد هوا',
            date: '1401/2/10',
        }
    ]

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
                {
                    message.map((value,index) =>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{value.from}</td>
                        <td>{value.subject}</td>
                        <td>{value.date}</td>
                        <td>
                            <i>
                                <button><BsTrash/></button>
                                <button><Link to={`/detailMessage/${value.id}`}><BsFileText className={"text-primary"}/></Link></button>
                            </i>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default PageListMessage;