import React, {useEffect, useState} from 'react';
import './NewUser.scss';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col} from "react-bootstrap";

const NewUser = () => {

    const [users, setUsers] = useState([]);
    const [userAction, setUserAction] = useState([]);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal1 = (value) => {
        setUserAction(value);
        setShowModal1(true);
    }
    const handleShowModal2 = (value) => {
        setUserAction(value);
        setShowModal2(true);
    }

    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apiloginuser.php")
            .then(Response => {
                const data = Response.data;
                setUsers(data);
            })
            .catch(error => console.log(error))
    }, [users])

    const deleteUser1 = (id) => {
        axios.delete(`http://relapp.freehost.io/rest/apideleteloginuser.php?id=${id}`)
            .then()
            .catch(error => console.log(error));
        handleCloseModal1()
    }

    const acceptUser = (user) => {
        const data = new FormData();
        data.append('name', user.fullname);
        data.append('office', user.officename);
        data.append('email', user.email);
        data.append('password', user.password);

        axios.post(`http://relapp.freehost.io/rest/apisenduser.php`, data)
            .catch(error => console.log(error))
        deleteUser1(user.id)
    }

    const deleteUser2 = (id) => {
        axios.delete(`http://relapp.freehost.io/rest/apideleteloginuser.php?id=${id}`)
            .then()
            .catch(error => console.log(error));
        handleCloseModal2()
    }

    return (
        <>
            {
                users.map(value =>
                    <>
                        <div className="detail-new-user">
                            <Col md={4}>
                                <p>نام و نام خانوادگی : {value.fullname}</p>
                            </Col>
                            <Col md={4}>
                                <p>نام شرکت : {value.officename}</p>
                            </Col>
                            <Col md={4}>
                                <p>ایمیل : {value.email}</p>
                            </Col>
                        </div>
                        <div className="buttons">
                            <Button variant={"danger"} size={"sm"} onClick={() => handleShowModal2(value)}>رد
                                کردن</Button>
                            <Button variant={"primary"} className={"btn-accept"} size={"sm"}
                                    onClick={() => handleShowModal1(value)}>پذیرفتن</Button>
                        </div>
                    </>
                )
            }
            <Modal show={showModal1} onHide={handleCloseModal1}>
                <Modal.Body>آیا کاربر جدید را تایید می کنید؟</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal1}>
                        بستن
                    </Button>
                    <Button variant="primary" onClick={() => acceptUser(userAction)}>
                        تایید
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal2} onHide={handleCloseModal2}>
                <Modal.Body>آیا کاربر جدید را رد می کنید؟</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal2}>
                        بستن
                    </Button>
                    <Button variant="primary" onClick={() => deleteUser2(userAction.id)}>
                        رد کردن
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default NewUser;


