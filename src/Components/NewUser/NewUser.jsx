import React, {useEffect, useState} from 'react';
import './NewUser.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {GetAllWaitingNewUser} from "../../Api/FunctionsApi/GetApi";
import {DeleteWaitingNewUser} from "../../Api/FunctionsApi/DeleteApi";
import {AddUser} from "../../Api/FunctionsApi/PostApi";
import {toast} from "react-toastify";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library";
import {useTheme} from "@table-library/react-table-library/theme";
import {getTheme} from "@table-library/react-table-library/baseline";

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
    const nodes = users;
    const data = {nodes};

    useEffect(() => {
        GetAllWaitingNewUser((isOk,data) => {
            isOk ? setUsers(data) : alert('b');
        })
    }, [data])

    const acceptUser = (user) => {
        const data = new FormData();
        data.append('name', user.fullname);
        data.append('office', user.officename);
        data.append('email', user.email);
        data.append('password', user.password);

        handleCloseModal1()
        AddUser(data,(isOk) => {
            if (isOk) {
                toast.success('کاربر با موفقیت ثبت شد', {
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

        DeleteWaitingNewUser(user.id)
    }

    const RejectUser = (id) => {
        DeleteWaitingNewUser(id, (isOk) => {
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
        handleCloseModal2()
    }


    const theme = useTheme(getTheme());

    return (
        <Table data={data} theme={theme}>
            {(tableList) => (
                <>
                    <Header>
                        <HeaderRow>
                            <HeaderCell>نام</HeaderCell>
                            <HeaderCell>شرکت</HeaderCell>
                            <HeaderCell>ایمیل</HeaderCell>
                            <HeaderCell>عضویت</HeaderCell>
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item) => (
                            <Row key={item.id} item={item}>
                                <Cell>{item.fullname}</Cell>
                                <Cell>
                                    {item.officename}
                                </Cell>
                                <Cell>{item.email}</Cell>
                                <Cell><Button variant={"primary"} className={"btn-accept"} size={"sm"}
                                              onClick={() => handleShowModal1(item)}>پذیرفتن</Button><Button variant={"danger"} size={"sm"} onClick={() => handleShowModal2(item)}>رد
                                    کردن</Button>
                                    </Cell>
                            </Row>
                        ))}
                    </Body>
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
                            <Button variant="primary" onClick={() => RejectUser(userAction.id)}>
                                رد کردن
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </Table>
    );
};

export default NewUser;


/*<>
            {
                !users ? <div style={{margin: "50px 500px"}}>کاربر جدیدی موجود نیست</div> :
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
                    <Button variant="primary" onClick={() => RejectUser(userAction.id)}>
                        رد کردن
                    </Button>
                </Modal.Footer>
            </Modal>
        </>*/