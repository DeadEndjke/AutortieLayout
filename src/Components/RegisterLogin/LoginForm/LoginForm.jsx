import a from './LoginForm.module.css'
import { useState } from 'react';

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ email: '', password: '' });
    const [login, setLogin] = useState(1);

    function buttonHandler(el) {
        setLogin(el);
        console.log(login);
    }

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (

        <form onSubmit={submitHandler}>
            {(() => {
                switch (login) {
                    case 1: {
                        return <div className={a.logininner}>
                            <button onClick={el => buttonHandler(1)} type='active' className={a.loginbtn}>вход</button>
                            <button onClick={el => buttonHandler(2)} className={a.registrationbtn}>регистрация</button>

                            <div className={a.formgroup}>
                                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                            </div>
                            <div className={a.formgroup}>
                                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                            <div className={a.forgotpassword}><a href="/">Забыли пароль?</a></div>
                            <div className={a.submit}> <input type="submit" value="войти" /></div>
                            {(error != '') ? (<div className={a.error}>
                                {error}
                            </div>) : ''}
                        </div>
                    }
                    case 2: {
                        return <div className={a.logininner}>
                            <button onClick={el => buttonHandler(1)} className={a.loginbtn}>вход</button>
                            <button onClick={el => buttonHandler(2)} type='active' className={a.registrationbtn}>регистрация</button>

                            <div className={a.formgroup}>
                                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                            </div>
                            <div className={a.formgroup}>
                                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </div>
                            <div className={a.forgotpassword}><a href="/">Забыли пароль?</a></div>
                            <div className={a.submit}> <input type="submit" value="войти" /></div>
                            {(error != '') ? (<div className={a.error}>
                                {error}
                            </div>) : ''}
                        </div>
                    }
                }

            })()}

        </form>



    );

}

export default LoginForm;