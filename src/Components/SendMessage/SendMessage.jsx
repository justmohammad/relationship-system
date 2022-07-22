import React, {useState, useEffect, useReducer} from 'react';
import './SendMessage.scss';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {GetAllUsers} from "../../Api/FunctionsApi/GetApi";
import {SubmitMessage} from "../../Api/FunctionsApi/PostApi";
import {toast} from "react-toastify";

const SendMessage = () => {

    const [organization, setOrganization] = useState([]);
    const [subject, setSubject] = useState([]);
    const [message, setMessage] = useState('')

    const animatedComponents = makeAnimated();

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
    const [to_user, dispatch] = useReducer(reducer, []);

    const options = []
    for (let i = 0; i < organization.length; i++) {
        options[i] = {
            value: organization[i].office,
            label: organization[i].office,
        };
    }

    useEffect(() => {
        GetAllUsers((isOk, data) => {
            if (isOk) setOrganization(data)
        });
    }, [])


    const sendMessage = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('subject', subject);
        data.append('text', message);
        data.append('from', localStorage.getItem('office'));
        data.append('to', JSON.stringify(to_user));

        SubmitMessage(data, (isOk) => {
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

        setSubject('');
        setMessage('');
    }

    return (
        <section>
            <form>
                <div className={"flex-form"}>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="exampleInputText1" className="form-label">از سازمان :</label>
                        <input type="text" id={"exampleInputText1"} className={"form-control"}
                               value={localStorage.getItem('office')} disabled required/>
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="exampleInputText1" className="form-label">به سازمان های :</label>
                        <Select
                            onChange={event => (event.map(item => dispatch({type: "COMPLETE", value: item.value})))}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={options}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText2" className="form-label">موضوع :</label>
                    <input type="text" id={"exampleInputText2"} className={"form-control"}
                           value={subject} onChange={event => setSubject(event.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات :</label>
                    <textarea className="form-control" onChange={event => setMessage(event.target.value)}
                              value={message} id="exampleFormControlTextarea1" rows="3" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">آپلود سند :</label>
                    <input type="file" style={{width: '210px'}}/>
                </div>

                <div className="btn-send">
                    <button type="submit" className="btn btn-primary" onClick={sendMessage}>ارسال</button>
                </div>
            </form>
        </section>
    );
};

export default SendMessage;
