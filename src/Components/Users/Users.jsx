import React, {useEffect, useState} from 'react';
import {BsTrash} from "react-icons/bs";
import {GetAllUsers} from "../../Api/FunctionsApi/GetApi";
import {DeleteUser} from "../../Api/FunctionsApi/DeleteApi";
import {toast} from "react-toastify";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        GetAllUsers((isOk, data) => {
            if (isOk) setUsers(data)
        });
    }, [users])

    const deleteUser = (id) => {
        DeleteUser(id, (isOk) => {
            if (isOk) {
                toast.success('کاربر با موفقیت حذف شد', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    }

    return (
        <div className={"list-message"} id={"list-message"}>
            <form action="" className={"search"}>
                <label htmlFor="search-message">جستجو :</label>
                <input type="search" id={"search-message"} className={"form-control"}/>
            </form>
            <label htmlFor="list-message">لیست کاربر ها</label>
            {
                !users ? <div style={{margin: "50px 500px"}}>کاربری موجود نیست</div> :
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
                                            <button onClick={() => deleteUser(value.id)}><BsTrash/></button>
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

export default Users;


