import React from 'react';
import './DetailMessage.scss';
import {Link} from "react-router-dom";

const DetailMessage = () => {
    return (
        <div className={"detail-message"}>
            <div className="card">
                <div className="card-header">
                    عنوان
                </div>
                <div className="card-body">
                    <h5 className="card-title">از طرف سازمان پزشکی</h5>
                    <p className="card-text">عنوان نامه درباره چیه ؟</p>
                    <Link to={"/listMessage"} className="btn btn-primary">بازگشت</Link>
                </div>
            </div>
        </div>
    );
};

export default DetailMessage;