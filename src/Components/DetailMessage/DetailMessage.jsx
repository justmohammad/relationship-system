import React, {useEffect, useState, useRef, useReducer} from 'react';
import Form from 'react-bootstrap/Form';
import './DetailMessage.scss';
import {Link, useParams} from "react-router-dom";
import {GetAllUsers} from "../../Api/FunctionsApi/GetApi"
import axios from "axios";
import {Row} from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {SubmitMessage} from "../../Api/FunctionsApi/PostApi";
import {toast} from "react-toastify";
import {DeleteUser} from "../../Api/FunctionsApi/DeleteApi";
import {UpdateStatusMessage} from "../../Api/FunctionsApi/UpdateApi";

const DetailMessage = (props) => {

    const accordionRef1 = useRef()
    const accordionRef2 = useRef()
    const accordionRef3 = useRef()

    const StatusMessageShow = () => {
        accordionRef1.current.click()
        document.getElementById('panelsStayOpen-headingTree').style.display = "flex"
        accordionRef3.current.click()
        document.getElementById('panelsStayOpen-headingOne').style.display = "none"
    }
    const StatusMessageHide = () => {
        accordionRef1.current.click()
        document.getElementById('panelsStayOpen-headingOne').style.display = "flex"
        accordionRef3.current.click()
        document.getElementById('panelsStayOpen-headingTree').style.display = "none"
    }


    const SendShow = () => {
        accordionRef1.current.click()
        document.getElementById('panelsStayOpen-headingTwo').style.display = "flex"
        accordionRef2.current.click()
        document.getElementById('panelsStayOpen-headingOne').style.display = "none"
    }

    const SendHide = () => {
        accordionRef1.current.click()
        document.getElementById('panelsStayOpen-headingOne').style.display = "flex"
        accordionRef2.current.click()
        document.getElementById('panelsStayOpen-headingTwo').style.display = "none"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "COMPLETE":
                const unique = arr => [...new Set(arr)];
                return unique([...state, action.value]);
            case "EMPTY":
                return state = [];
            default:
                return state;
        }
    };

    const animatedComponents = makeAnimated();
    const [organization, setOrganization] = useState([]);
    const [to_user, dispatch] = useReducer(reducer, []);

    const options = []
    for (let i = 0; i < organization.length; i++) {
        options[i] = {
            value: organization[i].office,
            label: organization[i].office,
        };
    }

    const [message, setMessage] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        GetAllUsers((isOk, data) => {
            isOk ? setOrganization(data) : alert('a');
        });
    }, [])

    useEffect(() => {
        axios.get(`http://relapp.freehost.io/restApi/GetApi/GetDetailMessage.php?id=${id}`)
            .then(Response => {
                const data = Response.data;
                setMessage(data);
            })
            .catch(error => console.log(error));
    }, [])

    const SendReply = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subject', message[0].subject);
        formData.append('text', message[0].message);
        formData.append('from', localStorage.getItem("office"));
        formData.append('to', JSON.stringify(to_user));

        SubmitMessage(formData, (isOk) => {
            if (isOk) {
                toast.success('پیام با موفقیت ارسال شد', {
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

    const [status,setStatus] = useState(0);

    const StatusMessage = () => {

        const data = new FormData();
        data.append('status', status);
        data.append('id', id);

        UpdateStatusMessage(data, (isOk) => {
            if (isOk) {
                toast.success('وضعیت با موفقیت ثبت شد', {
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
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" id={"panelsStayOpen-headingOne"} type="button"
                            data-bs-toggle="collapse" ref={accordionRef1}
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        جزئیات پیام
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            message.map(value =>
                                <Row>
                                    <div className={"d-md-flex col-md-6 pd-20"}>
                                        <b>مبدا : </b>
                                        <p className={"mg-10"}>{props.match.path.includes('sentMessage') ? localStorage.getItem("office") : value.from_user}</p>
                                    </div>
                                    <div className={"d-md-flex col-md-6 pd-20"}>
                                        <b>مقصد : </b>
                                        <p className={"mg-10"}>{props.match.path.includes('sentMessage') ? value.to_user : localStorage.getItem("office")}</p>
                                    </div>
                                    <div className={"d-md-flex col-md-6 pd-20"}>
                                        <b>موضوع : </b>
                                        <p className={"mg-10"}>{value.subject}</p>
                                    </div>
                                    <div className={"d-md-flex col-md-6 pd-20"}>
                                        <b>تاریخ : </b>
                                        <p className={"mg-10"}>{value.date_message}</p>
                                    </div>
                                    <div className={"pd-20"}>
                                        <b>پیام :</b>
                                        <p className={"pd-20"}>{value.message}</p>
                                    </div>
                                </Row>
                            )
                        }
                        <button className={"btn btn-primary btn-sm"}><Link to={"/"}>بازگشت</Link></button>
                        <button className={"btn btn-primary btn-sm"} onClick={SendShow}>ارجاع دادن</button>
                        <button className={"btn btn-primary btn-sm"} onClick={StatusMessageShow}>اعلام وضعیت پیام
                        </button>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" id={"panelsStayOpen-headingTwo"} type="button"
                            data-bs-toggle="collapse" ref={accordionRef2} style={{display: "none"}}
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ارجاع دادن
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            message.map(value =>
                                <form>
                                    <Row>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>مبدا : </b>
                                            <p className={"mg-10"}>{props.match.path.includes('sentMessage') ? localStorage.getItem("office") : value.from_user}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>مقصد : </b>
                                            <p className={"mg-10"}>{props.match.path.includes('sentMessage') ? value.to_user : localStorage.getItem("office")}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>موضوع : </b>
                                            <p className={"mg-10"}>{value.subject}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>تاریخ : </b>
                                            <p className={"mg-10"}>{value.date_message}</p>
                                        </div>
                                        <div className={"pd-20 text-muted"}>
                                            <b>پیام :</b>
                                            <p className={"pd-20"}>{value.message}</p>
                                        </div>
                                        <div className={"select-send d-md-flex align-items-center"}>
                                            <p className={"pd-20"}>ارجاع به :</p>
                                            <Select
                                                onChange={event => (event.map(item => dispatch({
                                                    type: "COMPLETE",
                                                    value: item.value
                                                })))}
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={options}
                                            />
                                        </div>
                                    </Row>
                                    <button className={"btn btn-primary btn-sm"} onClick={SendHide}>بازگشت</button>
                                    <button type={"submit"} className={"btn btn-primary btn-sm"}
                                            onClick={SendReply}>ارجاع
                                    </button>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTree">
                    <button className="accordion-button collapsed" id={"panelsStayOpen-headingTree"} type="button"
                            data-bs-toggle="collapse" ref={accordionRef3} style={{display: "none"}}
                            data-bs-target="#collapseTree" aria-expanded="false" aria-controls="collapseTree">
                        اعلام وضعیت پیام
                    </button>
                </h2>
                <div id="collapseTree" className="accordion-collapse collapse" aria-labelledby="headingTree"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            message.map(value =>
                                <>
                                    <Row>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>مبدا : </b>
                                            <p className={"mg-10"}>{value.from_user}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>مقصد : </b>
                                            <p className={"mg-10"}>{localStorage.getItem("office")}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>موضوع : </b>
                                            <p className={"mg-10"}>{value.subject}</p>
                                        </div>
                                        <div className={"d-md-flex col-md-6 pd-20 text-muted"}>
                                            <b>تاریخ : </b>
                                            <p className={"mg-10"}>{value.date_message}</p>
                                        </div>
                                        <div className={"pd-20 text-muted"}>
                                            <b>پیام :</b>
                                            <p className={"pd-20"}>{value.message}</p>
                                        </div>
                                        <div className={"d-md-flex align-items-center"}>
                                            <p className={"pd-20"}>درصد انجام :</p>
                                            <Form.Select className={"complete-message"} onChange={event => setStatus(event.target.value)}
                                                         aria-label="Default select example">
                                                <option value={0}>0%</option>
                                                <option value={10}>10%</option>
                                                <option value={20}>20%</option>
                                                <option value={30}>30%</option>
                                                <option value={40}>40%</option>
                                                <option value={50}>50%</option>
                                                <option value={60}>60%</option>
                                                <option value={70}>70%</option>
                                                <option value={80}>80%</option>
                                                <option value={90}>90%</option>
                                                <option value={100}>100%</option>
                                            </Form.Select>
                                        </div>
                                    </Row>
                                    <button className={"btn btn-primary btn-sm"} onClick={StatusMessageHide}>بازگشت
                                    </button>
                                    <button className={"btn btn-primary btn-sm"} onClick={StatusMessage}>ارسال وضعیت به
                                        فرستنده
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMessage;