import React, { useEffect, useState, useRef} from 'react';
import './DetailMessage.scss';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const DetailMessage = () => {

    const accordionRef = useRef()
    const accordionRef2 = useRef()

    const Reference = () => {
        document.getElementById('panelsStayOpen-headingTwo').style.display = "flex"
        accordionRef2.current.click()
    }

    const Reference2 = () => {
        document.getElementById('panelsStayOpen-headingTwo').style.display = "none"
        accordionRef.current.click()
    }

    const [organization,setOrganization] = useState([]);
    const [message,setMessage] = useState([]);

    let {id} = useParams();


    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apiOrganization.php")
        .then(Response => {
           const data = Response.data;
           setOrganization(data);
            })
        .catch(error => console.log(error))

        axios.get(`http://relapp.freehost.io/rest/apiediteMessages.php?id=${id}`)
        .then(Response => {
           const data = Response.data;
           setMessage(data);
            })
        .catch(error => console.log(error))
    },[message])


    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" ref={accordionRef}
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        جزئیات پیام
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            message.map(value =>        
                                <p>{value.text}</p>
                            )
                        }
                        <button className={"btn btn-primary"}><Link to={"/"}>بازگشت</Link></button>
                        <button className={"btn btn-primary"} onClick={Reference}>ارجاع به جای دیگر</button>
                        <button className={"btn btn-primary"}>انجام شد و ارسال به فرستنده</button>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" id={"panelsStayOpen-headingTwo"} type="button" data-bs-toggle="collapse" ref={accordionRef2} style={{display: "none"}}
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        پاسخ به پیام
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {
                            message.map(value =>        
                                <p className={"text-muted"}>{value.text}</p>
                            )
                        }
                        
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCheck" className="form-label">به سازمان های :</label>
                                <div id="exampleInputCheck" className="to-org">
                                    {
                                        organization.map(value =>
                                            <div className="form-check">
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    {value.Organization}
                                                </label>
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </form>
                        <button className={"btn btn-primary"} onClick={Reference2}>بازگشت</button>
                        <button className={"btn btn-primary"}>ارسال پاسخ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMessage;