import React, {useEffect, useState} from 'react';
import './ListMessage.scss';
import {Link} from "react-router-dom";
import {BsFileText, BsTrash} from "react-icons/bs";
import {GetReceiveMessages} from "../../Api/FunctionsApi/GetApi";
import {DeleteMessage} from "../../Api/FunctionsApi/DeleteApi";
import {toast} from "react-toastify";

const ListMessage = () => {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        const data = new FormData();
        data.append('office', localStorage.getItem('office'));
        GetReceiveMessages(data, (isOk, data) => {
            if (isOk) setMessage(data)
        })
    }, [message])

    const deleteMessage = (id) => {
        DeleteMessage(id, (isOk) => {
            if (isOk) {
                toast.success('پیام با موفقت پاک شد', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    }

    return (
        <div className={"list-message"} id={"list-message"}>
            <form action="" className={"search"}>
                <label htmlFor="search-message">جستجو :</label>
                <input type="search" id={"search-message"} className={"form-control"}/>
            </form>
            <label htmlFor="list-message">لیست پیام ها</label>
            {
                !message ? <div style={{margin: "50px 500px"}}>پیامی موجود نیست</div> :
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
                            message.map((value, index) =>

                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.from_user}</td>
                                    <td>{value.subject}</td>
                                    <td>{value.date_message}</td>
                                    <td>
                                        <i>
                                            <button onClick={() => deleteMessage(value.id)}><BsTrash/></button>
                                            <button><Link to={`/detailMessage/${value.id}`}><BsFileText
                                                className={"text-primary"}/></Link></button>
                                        </i>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default ListMessage;