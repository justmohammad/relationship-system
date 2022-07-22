import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BsTrash} from "react-icons/bs";

const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apiOrganization.php")
            .then(Response => {
                const data = Response.data;
                setUsers(data);
            })
            .catch(error => console.log(error))
    }, [users])

    const deleteMessage = (id) => {
        axios.delete(`http://relapp.freehost.io/rest/apideleteuser.php?id=${id}`)
            .catch(error => console.log(error));
    }

    return (
        <div className={"list-message"} id={"list-message"}>
            <form action="" className={"search"}>
                <label htmlFor="search-message">جستجو :</label>
                <input type="search" id={"search-message"} className={"form-control"}/>
            </form>
            <label htmlFor="list-message">لیست پیام ها</label>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام و نام خانوادگی</th>
                    <th scope="col">نام شرکت</th>
                    <th scope="col">ایمیل</th>
                    <th scope="col">حذف از سیستم</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((value, index) =>

                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.office}</td>
                            <td>{value.email}</td>
                            <td>
                                <i>
                                    <button onClick={() => deleteMessage(value.id)}><BsTrash/></button>
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

export default Users;


