import React, {useState, useEffect} from 'react';
import './PageSendMessage.scss';
import axios from "axios";

const PageSendMessage = () => {

    const [organization,setOrganization] = useState([]);
    const [description,setDescription] = useState([]);
    const [title,setTitle] = useState([]);
    const [subject,setSubject] = useState([]);
    const [senderOrganization,setSenderOrganization] = useState([]);



    useEffect(() => {
        axios.get("http://relapp.freehost.io/rest/apiOrganization.php")
        .then(Response => {
           const data = Response.data;
           setOrganization(data);
        })
        .catch(error => console.log(error))
    },[])

    const sendMessage = () => {
        const data = {
            "subject" : subject,
            "title"   : title,
            "description" : description,
            "senderOrganization" : senderOrganization
        }

        axios.get(`http://relapp.freehost.io/rest/apiSendMessage.php`,data)
        .then(Response => {
           console.log('ok');
        })
        .catch(error => console.log(error))
        console.log('ali');
    }

    const sender = [
        'استانداری (مدیریت بحران)',
        'صدا و سیمای مرکز استان',
        'راه و شهرسازی',
        'اداره کل هواشناسی',
        'جهاد کشاورزی',
        'اداره کل راه و شهر سازی'
    ]

    return (
        <section>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputText1" className="form-label">از سازمان :</label>
                    <select id="exampleInputText1" className="form-select form-control from-org" onChange={(e) => setSenderOrganization(e.target.value)}
                            aria-label="Default select example">
                        <option selected>انتخاب سازمان فرستنده</option>
                        {sender.map((value, index) =>
                            <option value={index + 1}>{value}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCheck" className="form-label">به سازمان های :</label>
                    <div id="exampleInputCheck" className="to-org">
                        {
                            organization.map(value =>
                                <div className="form-check">
                                    <label className="form-check-label" htmlFor={value.id}>
                                        {value.Organization}
                                    </label>
                                    <input className="form-check-input" type="checkbox" value="" id={value.id}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText2" className="form-label">موضوع :</label>
                    <select id="exampleInputText2" className="form-select form-control from-org" onChange={(e) => setSubject(e.target.value)}
                            aria-label="Default select example">
                        <option selected>انتخاب موضوع</option>
                        <option value="1">هشدار سریع</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText3" className="form-label">عنوان :</label>
                    <select id="exampleInputText3" className="form-select form-control from-org" onChange={(e) => setTitle(e.target.value)}
                            aria-label="Default select example">
                        <option selected>انتخاب عنوان</option>
                        <option value="1">همکاری و هماهنگی بین سازمانی در ایجاد و ارتقای ظرفیت های مراکز پایش مخاطرات و
                            هشدار سریع
                        </option>
                        <option value="2">اعلام هشدار و اطلاع رسانی به مردم در خصوص مخاطرات و شرایط اضطراری</option>
                        <option value="3">ایجاد و تقویت مراکز پایش و هشدار مخاطرات طمین ساخت (زلزله ، آتشفشان و لغزش
                            زمین)
                        </option>
                        <option value="4">ایجاد و توسعه مراکز پایش و هشدار مخاطرات هواشناختی</option>
                        <option value="5">تکمیل شبکه پایش و هشدار سیل</option>
                        <option value="6">تقویت مراکز پایش و هشدار خشکسالی</option>
                        <option value="7">پایش و هشدار اپیدمی آفات و بیماری های گیاهی و جانوری مشترک انسان و دام
                        </option>
                        <option value="8">توسعه شبکه شتاب نگاری استان</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات :</label>
                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"/>
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

export default PageSendMessage;
