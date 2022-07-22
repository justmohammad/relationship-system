import React, {useState} from 'react';
import './Login.scss';
import axios from "axios";

const mode = 'login';

const LoginComponent = () => {

    const [mode, setMode] = useState('login');
    const toggleMode = () => {
        const newMode = mode === 'login' ? 'signup' : 'login';
        setMode(newMode);
    }
    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}/>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1>{mode === 'login' ? 'ورود' : 'ثبت نام'}</h1>
                    <div className="form-block__toggle-block">
                        <span>{mode === 'login' ? 'حساب کاربری ندارید؟' : 'از قبل حساب کاربری دارید؟'} &#8594;</span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode.bind(this)}/>
                        <label htmlFor="form-toggler"/>
                    </div>
                </header>
                <LoginForm mode={mode}/>
            </section>
        </div>
    )
}

const LoginForm = (mode) => {

    const [errorBorder, setErrorBorder] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fullName, setFullName] = useState('');
    const [office, setOffice] = useState('');
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const patternEmail = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if (mode.mode === 'signup') {
            if (fullName) {
                if (office) {
                    if (createEmail && patternEmail.test(createEmail)) {
                        if (createPassword && createPassword.length >= 8) {
                            if (repeatPassword && createPassword === repeatPassword) {
                                const data = new FormData();
                                data.append('name', fullName);
                                data.append('office', office);
                                data.append('email', createEmail);
                                data.append('password', createPassword);

                                axios.post(`http://relapp.freehost.io/rest/apinewuser.php`, data)
                                    .catch(error => console.log(error))
                                setErrorBorder('')
                                alert('اطلاعات شما با موفقیت ثبت شد لطفا در انتطار تایید ادمین باشید و سپس ورود کنید')
                            } else {
                                setErrorBorder('repeatPassword')
                                setRepeatPassword('');
                            }
                        } else {
                            setCreatePassword('');
                            setErrorBorder('createPassword')
                        }
                    } else {
                        setCreateEmail('');
                        setErrorBorder('createEmail')
                    }
                } else {
                    setOffice('');
                    setErrorBorder('office')
                }
            } else {
                setFullName('');
                setErrorBorder('fullname')
            }
        } else {
            if (email) {
                if (password) {
                    const data = new FormData();
                    data.append('email', email);
                    data.append('password', password);

                    axios.post(`http://relapp.freehost.io/rest/apivalidation.php`, data)
                        .then((response) => {
                            const data = response.data;
                            if (data) {
                                localStorage.setItem('name', data[0].name);
                                localStorage.setItem('office', data[0].office);
                                localStorage.setItem('id', data[0].id);
                                console.log(data);
                                setErrorBorder('');
                                setEmail('');
                                setPassword('');
                                window.location.reload();
                            } else {
                                setErrorBorder('')
                                setEmail('');
                                setPassword('');
                                alert('ایمیل یا رمز ورود اشتباه است');
                            }
                        })
                        .catch(error => console.log(error))
                } else {
                    setErrorBorder('password')
                }
            } else {
                setErrorBorder('email')
            }
        }
    }

    return (
        <form>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="email" borderError={errorBorder === 'email' ? 'borderError' : ''} id="email" label="ایمیل"
                           value={email} onChange={event => setEmail(event.target.value)}
                           disabled={mode.mode === 'signup'}/>
                    <Input type="password" borderError={errorBorder === 'password' ? 'borderError' : ''} id="password"
                           label="رمز ورود"
                           value={password} onChange={event => setPassword(event.target.value)}
                           disabled={mode.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" borderError={errorBorder === 'fullname' ? 'borderError' : ''} id="fullname"
                           label="نام و نام خانوادگی"
                           value={fullName} onChange={event => setFullName(event.target.value)}
                           disabled={mode.mode === 'login'}/>
                    <Input type="text" borderError={errorBorder === 'office' ? 'borderError' : ''} id="office"
                           label="نام شرکت" value={office} onChange={event => setOffice(event.target.value)}
                           disabled={mode.mode === 'login'}/>
                    <Input type="email" borderError={errorBorder === 'createEmail' ? 'borderError' : ''} id="email"
                           label="ایمیل" value={createEmail} onChange={event => setCreateEmail(event.target.value)}
                           disabled={mode.mode === 'login'}/>
                    <Input type="password" borderError={errorBorder === 'createPassword' ? 'borderError' : ''}
                           id="createpassword" label="یک رمز ورود انتخاب کنید"
                           value={createPassword} onChange={event => setCreatePassword(event.target.value)}
                           disabled={mode.mode === 'login'}/>
                    <Input type="password" borderError={errorBorder === 'repeatPassword' ? 'borderError' : ''}
                           id="repeatpassword" label="تکرار رمز ورود"
                           value={repeatPassword} onChange={event => setRepeatPassword(event.target.value)}
                           disabled={mode.mode === 'login'}/>
                </div>
            </div>
            <button className="button button--primary full-width" onClick={handleSubmit}
                    type="submit">{mode.mode === 'login' ? 'ورود' : 'ثبت نام'}</button>
        </form>
    )
}

const Input = ({id, type, label, disabled, onChange, borderError, value}) => (
    <input className={`form-group__input ${borderError}`} value={value} type={type} id={id} placeholder={label}
           onChange={onChange}
           disabled={disabled} required/>
);

const Login = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={
                function () {
                    console.log('submit');
                }
            }
        />
    </div>
);
export default Login;

