import React from 'react';
import './Login.scss';
import {Link} from "react-router-dom";

const Login = () => {
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
                <button type="submit" className="btn btn-primary form-control">ورود</button>
            </form>
            <p className={'account'}>ثبت نام نکرده اید ؟ <Link to={"/signUp"}>ثبت نام</Link></p>
        </div>
    );
};

export default Login;