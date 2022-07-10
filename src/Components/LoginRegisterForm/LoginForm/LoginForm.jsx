import a from './LoginForm.module.css'
import { useState } from 'react';

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ email: '', password: '' });


    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={a.loginform}>
                <div className={a.formgroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className={a.formgroup}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>

                <div className={a.forgotpassword}><a href="/">Забыли пароль?</a></div>

                <div className={a.submit}> <input type="submit" value="войти" /></div>
                {(error != '') ? (<div className={a.error}>
                    {error}
                </div>) : ''}</div>
        </form>
    );
}

export default LoginForm;