import React, {useEffect, useState} from 'react';
import './ListSentMessage.scss';
import {BsCheckCircleFill, BsFileText} from "react-icons/bs";
import {Link} from "react-router-dom";
import axios from "axios"

const ListSentMessage = () => {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        const data = new FormData();
        data.append('office', localStorage.getItem('office'));

        axios.post("http://relapp.freehost.io/rest/apiMessages.php", data)
            .then(Response => {
                const data = Response.data;
                setMessage(data);
            })
            .catch(error => console.log(error))
    }, [])

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
                            <th scope="col">به طرف</th>
                            <th scope="col">عنوان</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">وضعیت</th>
                            <th scope="col">جزئیات</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            message.map((value, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.to_user}</td>
                                    <td>{value.subject}</td>
                                    <td>{value.date_message}</td>
                                    <td style={{color: "green", margin: "5px"}}>
                                        {value.status}
                                        <BsCheckCircleFill style={{marginRight: "5px"}}/>
                                    </td>
                                    <td>
                                        <i>
                                            <button><Link to={`/sentMessage/${value.id}`}><BsFileText
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

export default ListSentMessage;
