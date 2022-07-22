import React, {useState, useEffect, useReducer} from 'react';
import './SendMessage.scss';
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SendMessage = () => {

    const [organization, setOrganization] = useState([]);
    const [from_user, setFrom] = useState([]);
    const [subject, setSubject] = useState([]);
    const [message, setMessage] = useState('')

    const animatedComponents = makeAnimated();

    const reducer = (state, action) => {
        switch (action.type) {
            case "COMPLETE":
                const unique = arr => [...new Set(arr)];
                return unique([...state,action.value])
            default:
                return state;
        }
    };
    const [to_user, dispatch] = useReducer(reducer, []);

    const options = []
    for (let i=0; i<organization.length; i++) {
        options[i] = {
            value: organization[i].office,
            label: organization[i].office,
        };
    }

    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apiOrganization.php")
            .then(Response => {
                const data = Response.data;
                setOrganization(data);
            })
            .catch(error => console.log(error))
    }, [])


    const sendMessage = () => {

        const data = new FormData();
        data.append('subject', subject);
        data.append('text', message);
        data.append('from', from_user);
        data.append('to', JSON.stringify(to_user));

        axios.post(`http://relapp.freehost.io/rest/apiSendMessage.php`, data)
            .catch(error => console.log(error))
    }

    return (
        <section>
            <form>
                <div className={"flex-form"}>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="exampleInputText1" className="form-label">از سازمان :</label>
                        <input type="text" id={"exampleInputText1"} className={"form-control"}
                               onChange={event => setFrom(event.value)} value={localStorage.getItem('office')} disabled required/>
                        {/*<Select
                            onChange = {event => setFrom(event.value)}
                            closeMenuOnSelect={true}
                            components={animatedComponents}
                            options={options}
                        />*/}
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="exampleInputText1" className="form-label">به سازمان های :</label>
                        <Select
                            onChange = {event => (event.map(item => dispatch({type: "COMPLETE",value: item.value})))}
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
                           onChange={event => setSubject(event.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات :</label>
                    <textarea className="form-control" onChange={event => setMessage(event.target.value)}
                              id="exampleFormControlTextarea1" rows="3" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">آپلود سند :</label>
                    <input type="file" style={{width: '210px'}}/>
                </div>

                <div className="btn-send">
                    <button type="submit" className="btn btn-primary" onClick={() => sendMessage()}>ارسال</button>
                </div>
            </form>
        </section>
    );
};

export default SendMessage;
