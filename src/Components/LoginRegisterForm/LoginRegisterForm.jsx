import a from './LoginRegisterForm.module.css'
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom'
import coolicon from './../../assets/coolicon.svg'


const LoginRegisterForm = ({ changeHeader }) => {

    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin'
    }

    const [isloged, setIsloged] = useState(0);
    const [user, setUser] = useState({ email: '', password: '' })
    const [reguser, setReguser] = useState({ email: '', password: '' }) //register
    const [error, setError] = useState('');
    const [autorisation, setAutorisation] = useState(1);

    const Login = details => {
        if ((details.email == adminUser.email && details.password == adminUser.password) || (details.email == reguser.email && details.password == reguser.password)) {
            setUser({
                email: details.email,
                password: details.password
            });
            setIsloged(1);
            changeHeader(1);
        }
        else {
            setError("details do not much");
            setIsloged(0);
        }
    }

    const Register = regdetails => {
        if (regdetails.password == regdetails.repeatpassword) {
            setReguser({
                email: regdetails.email,
                password: regdetails.password
            })
        }
        else {
            setError('passwords should be the same')
        }
    }

    const Logout = () => {
        setUser({
            email: '',
            password: ''
        });
        setIsloged(0);
    }

    const ReturnToLogin = () => {
        setUser({
            email: '',
            password: ''
        });
        setAutorisation(1)
    }




    function buttonHandler(e) {
        setAutorisation(e);
    }

    return (
        <div className={a.loginregisterform}>
            {(() => {


                switch (autorisation) {
                    case 1: {
                        return (
                            <div className={a.loginform}>
                                <NavLink to="/"><div className={a.quitbutton}> x</div></NavLink>

                                <div className={a.topbuttons}>
                                    <button onClick={e => buttonHandler(1)} type='active' className={a.loginbtn}>Вход</button>
                                    <button onClick={e => buttonHandler(2)} className={a.registerbtn}>Регистрация</button>
                                </div>

                                {(user.email != '') ? (
                                    <div className={a.welcome}>
                                        <img src={coolicon} alt="" />
                                        <h2>Вы авторизировались </h2>
                                        <button > <NavLink to="/"> Продолжить</NavLink></button>
                                    </div>
                                ) : (
                                    <LoginForm Login={Login} error={error} />
                                )}

                            </div>

                        );
                    }
                    case 2: {
                        return (
                            <div className={a.registerform}>
                                <NavLink to="/"><div className={a.quitbutton}> x</div></NavLink>
                                <div className={a.topbuttons}>
                                    <button onClick={e => buttonHandler(1)} className={a.loginbtn}>Вход</button>
                                    <button onClick={e => buttonHandler(2)} type='active' className={a.registerbtn}>Регистрация</button>
                                </div>
                                {(reguser.email != '') ? (
                                    <div className={a.welcome}>
                                        <h2>Вы зарегестрировались </h2>
                                        <button onClick={ReturnToLogin}>Авторизироваться</button>
                                    </div>
                                ) : (
                                    <RegisterForm Register={Register} error={error} />
                                )}
                            </div>
                        );
                    }

                }

            })()
            }


        </div>
    );
}


export default LoginRegisterForm;