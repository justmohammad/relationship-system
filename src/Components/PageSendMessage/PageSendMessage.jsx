import React from 'react';
import './PageSendMessage.scss';

const PageSendMessage = () => {
    return (
        <section>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputText1" className="form-label">از سازمان :</label>
                    <select id="exampleInputText1" className="form-select form-control from-org"
                            aria-label="Default select example">
                        <option selected>انتخاب سازمان فرستنده</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputCheck" className="form-label">به سازمان های :</label>
                    <div id="exampleInputCheck" className="to-org">

                        <div className="form-check">
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                سازمان اولی
                            </label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                سازمان دومی
                            </label>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText2" className="form-label">موضوع :</label>
                    <select id="exampleInputText2" className="form-select form-control from-org"
                            aria-label="Default select example">
                        <option selected>انتخاب موضوع</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText3" className="form-label">عنوان :</label>
                    <select id="exampleInputText3" className="form-select form-control from-org"
                            aria-label="Default select example">
                        <option selected>انتخاب عنوان</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">توضیحات :</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">آپلود سند :</label>
                    <input type="file" style={{width: '210px'}}/>
                </div>
                <div className="mb-3">
                    <div className={"task-section"}>
                        <div className="make-task" id={"exampleFormControlMakeTask"}>
                            <label htmlFor="exampleFormControlMakeTask" className="form-label">ایجاد وظیفه : </label>
                            <div className={"task-input"}>
                                <input type="text" className={"form-control"}/>
                                <button className={"btn btn-primary"}>افزودن</button>
                            </div>
                        </div>
                        <div className={"mb-3"}>
                            <label htmlFor="exampleFormControlMakeTask" className="form-label"
                                   style={{marginRight: '100px'}}> وظایف : </label>
                            <div className="tasks">
                                <ol>
                                    <li>وظیفه 1</li>
                                    <li>وظیفه 2</li>
                                    <li>وظبفه 3</li>
                                    <li>وظیفه 4</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-send">
                    <button type="submit" className="btn btn-primary">ارسال</button>
                </div>
            </form>
        </section>
    );
};

export default PageSendMessage;