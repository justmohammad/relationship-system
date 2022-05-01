import React from 'react';
import './SignUp.scss';
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={'login'}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">آدرس  ایمیل</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">رمز</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary form-control">ثبت نام</button>
            </form>
            <p className={'account'}>حساب دارید ؟ <Link to={"/signUp"}>ورود</Link></p>
        </div>
    );
};

export default SignUp;