import React, {useEffect, useState} from 'react';
import {BsTrashFill} from "react-icons/bs";
import {GetAllUsers} from "../../Api/FunctionsApi/GetApi";
import {DeleteUser} from "../../Api/FunctionsApi/DeleteApi";
import {toast} from "react-toastify";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library";
import {useTheme} from "@table-library/react-table-library/theme";
import {getTheme} from "@table-library/react-table-library/baseline";
import {usePagination} from "@table-library/react-table-library/pagination";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [userAction, setUserAction] = useState([]);
    const [showModal1, setShowModal1] = useState(false);

    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal1 = (value) => {
        setUserAction(value);
        setShowModal1(true);
    }

    const nodes = users;
    let data = {nodes};

    useEffect(() => {
        GetAllUsers(localStorage.getItem("id"),(isOk, data) => {
            if (isOk) setUsers(data)
        });
    }, [data])

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

        handleCloseModal1()
    }

    data = {
        nodes: users ? data.nodes.filter((item) => item.name.includes(search)) : '',
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 11,
        },
        onChange: onPaginationChange,
    });

    function onPaginationChange(action, state) {
        console.log(action, state);
    }

    const theme = useTheme(getTheme());

    return (
        <>
            {
                !users ? <div style={{margin: "50px 500px"}}>کاربری موجود نیست</div> :
                    <>
                        <label htmlFor="search">
                            جستجو :&nbsp;
                            <input id="search" type="text" value={search} onChange={handleSearch}/>
                        </label>
                        <br/>
                        <Table data={data} theme={theme} pagination={pagination}>
                            {(tableList) => (
                                <>
                                    <Header>
                                        <HeaderRow>
                                            <HeaderCell>نام</HeaderCell>
                                            <HeaderCell>شرکت</HeaderCell>
                                            <HeaderCell>ایمیل</HeaderCell>
                                            <HeaderCell>حذف</HeaderCell>
                                        </HeaderRow>
                                    </Header>

                                    <Body>
                                        {tableList.map((item) => (
                                            <Row key={item.id} item={item}>
                                                <Cell>{item.name}</Cell>
                                                <Cell>
                                                    {item.office}
                                                </Cell>
                                                <Cell>{item.email}</Cell>
                                                <Cell><button className={"text-danger"} style={{background: "transparent",border: "0"}} onClick={() => handleShowModal1(item)}><BsTrashFill/></button></Cell>
                                            </Row>
                                        ))}
                                    </Body>
                                </>
                            )}
                        </Table>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

                            <span>
            Page:{' '}
                                {pagination.state.getPages(data.nodes).map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        style={{
                                            fontWeight: pagination.state.page === index ? 'bold' : 'normal',
                                        }}
                                        onClick={() => pagination.fns.onSetPage(index)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
          </span>
                        </div>
                    </>
            }

            <Modal show={showModal1} onHide={handleCloseModal1}>
                <Modal.Body>آیا کاربر جدید را حذف می کنید؟</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal1}>
                        بستن
                    </Button>
                    <Button variant="danger" onClick={() => deleteUser(userAction.id)}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Users;