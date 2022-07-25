import React, {useEffect, useState} from 'react';
import './ListSentMessage.scss';
import {BsFileEarmarkMinusFill} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import {GetSentMessages} from "../../Api/FunctionsApi/GetApi";
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library";
import {useTheme} from "@table-library/react-table-library/theme";
import {getTheme} from "@table-library/react-table-library/baseline";
import {usePagination} from "@table-library/react-table-library/pagination";

const ListSentMessage = () => {

    const [message, setMessage] = useState([]);
    const [search, setSearch] = useState('');

    const {pathname} = useLocation();

    useEffect(() => {
        const data = new FormData();
        data.append('office', localStorage.getItem('office'));

        GetSentMessages(data,(isOk,data) => {
            if (isOk) setMessage(data)
        })
    }, [message])

    const nodes = message;
    let data = {nodes};
    data = {
        nodes: data.nodes.filter((item) => item.subject.includes(search)),
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
                !message ? <div style={{margin: "50px 500px"}}>پیامی موجود نیست</div> :
                    <>
                        <label htmlFor="search">
                            Search :&nbsp;
                            <input id="search" type="text" value={search} onChange={handleSearch}/>
                        </label>
                        <br/>
                        <Table data={data} theme={theme} pagination={pagination}>
                            {(tableList) => (
                                <>
                                    <Header>
                                        <HeaderRow>
                                            <HeaderCell>{pathname === '/sentMessage' ? 'به طرف' : 'از طرف'}</HeaderCell>
                                            <HeaderCell>موضوع</HeaderCell>
                                            <HeaderCell>وضعیت</HeaderCell>
                                            <HeaderCell>تاریخ</HeaderCell>
                                            <HeaderCell>جزئیات</HeaderCell>
                                        </HeaderRow>
                                    </Header>

                                    <Body>
                                        {tableList.map((item) => (
                                            <Row key={item.id} item={item}>
                                                <Cell>{pathname === '/sentMessage' ? item.to_user.replace("[",'').replace("]",'').replace(",","--") : item.from_user}</Cell>
                                                <Cell>{item.subject}</Cell>
                                                <Cell>{`${item.status}% انجام شده`}</Cell>
                                                <Cell>{item.date_message}</Cell>
                                                <Cell><Link
                                                    to={`/sentMessage/detailMessage/${item.id}`}><i><BsFileEarmarkMinusFill/></i></Link></Cell>
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
        </>
    );
};

export default ListSentMessage;