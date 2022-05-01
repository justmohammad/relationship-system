import React, {useRef} from 'react';
import './DetailMessage.scss';
import {Link} from "react-router-dom";

const DetailMessage = () => {

    const accordionRef = useRef()
    const accordionRef2 = useRef()

    const Reference = () => {
        accordionRef.current.click()
    }

    const answer = () => {
        const displayElement = document.getElementById('panelsStayOpen-headingTwo').style.display
        if (displayElement === 'block') {
            document.getElementById('panelsStayOpen-headingTwo').style.display = 'none'
        } else {
            document.getElementById('panelsStayOpen-headingTwo').style.display = 'block'
        }
        accordionRef2.current.click()
    }

    return (

        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" ref={accordionRef2}
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                     aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.</p>
                        <button className={"btn btn-primary"}><Link to={"/"}>بازگشت</Link></button>
                        <button className={"btn btn-primary"} onClick={Reference}>ارجاع</button>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" ref={accordionRef}
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" onClick={answer}
                            aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                     aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.</p>
                        <button className={"btn btn-primary"} onClick={Reference}>بازگشت</button>
                        <button className={"btn btn-primary"}>ارسال پاسخ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailMessage;