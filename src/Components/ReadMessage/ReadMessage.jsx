import React, {useRef} from 'react';
import './ReadMessage.scss';
import {Link} from "react-router-dom";

const ReadMessage = () => {

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
                        <p>اطلاع رسانی و میزان خطر مخاطرات قریب الوقوع به مردم و کارکنان از ارکان مهم مدیریت شرایط اضطراری (حوادثو سوانح) است از طرفی انتشار خطر شرایط اضطراری و مخاطرات احتمالی نباید به گونه ای باشد که مردم  و کارکنان دچار هراس و وحشت شوند و از سوی دیگر محدودیت خبر رسانی نباید منجر به عدم اطلاع مردم از خطرات احتمالی و مواجهه تعداد بیشتری از مردم با آن مخاطره گردد. در این راستا استقرار مراکز پایش مخاطرات و هشدار سریع و سطح بندی شرایط اضطراری براساس الگوهای مصوب و همچنین استقرار شبکه ارتباطی مناسب مناسب توسط فرمانداری ها قبل از وقوع بحران ضروری است. از این رو باید زیرساخت های لازم جهت امکان توسعه سامانه استانی هشدار سریع و دستگاهی شامل : سامانه شناخت مخاطرات ، پایش مخاطرات ، اطلاع رسانی میزان خطر (ریسک) و تامین پاسخ اولیه و سریع به صورت یکپارچه و دستگاهی و قابلیت بهره برداری از آنها در هنگام بحران مهیا گردد.  </p>
                        <button className={"btn btn-primary"}><Link to={"/sentMessage"}>بازگشت</Link></button>
                        <button className={"btn btn-primary"} onClick={Reference}>ارجاع به جای دیگر</button>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" id={"panelsStayOpen-headingTwo"} type="button" data-bs-toggle="collapse" ref={accordionRef2} style={{display: "none"}}
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        پاسخ
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className={"text-muted"}>اطلاع رسانی و میزان خطر مخاطرات قریب الوقوع به مردم و کارکنان از ارکان مهم مدیریت شرایط اضطراری (حوادثو سوانح) است از طرفی انتشار خطر شرایط اضطراری و مخاطرات احتمالی نباید به گونه ای باشد که مردم  و کارکنان دچار هراس و وحشت شوند و از سوی دیگر محدودیت خبر رسانی نباید منجر به عدم اطلاع مردم از خطرات احتمالی و مواجهه تعداد بیشتری از مردم با آن مخاطره گردد. در این راستا استقرار مراکز پایش مخاطرات و هشدار سریع و سطح بندی شرایط اضطراری براساس الگوهای مصوب و همچنین استقرار شبکه ارتباطی مناسب مناسب توسط فرمانداری ها قبل از وقوع بحران ضروری است. از این رو باید زیرساخت های لازم جهت امکان توسعه سامانه استانی هشدار سریع و دستگاهی شامل : سامانه شناخت مخاطرات ، پایش مخاطرات ، اطلاع رسانی میزان خطر (ریسک) و تامین پاسخ اولیه و سریع به صورت یکپارچه و دستگاهی و قابلیت بهره برداری از آنها در هنگام بحران مهیا گردد.</p>
                        <button className={"btn btn-primary"} onClick={Reference2}>بازگشت</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadMessage;