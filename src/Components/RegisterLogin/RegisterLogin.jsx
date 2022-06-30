import a from './RegisterLogin.module.css';
import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';



const RegisterLogin = () => {
    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin'
    }

    const [user, setUser] = useState({ email: '', password: '' })
    const [error, setError] = useState('');

    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log('logged in')
            setUser({
                email: details.email,
                password: details.password
            });
        }
        else {
            console.log('details do not much');
            setError("details do not much");
        }
    }

    const Logout = () => {
        setUser({
            email: '',
            password: ''
        });
    }
    return (
        <div className={a.login}>
            {(user.email != '') ? (
                <div className={a.welcome}>
                    <h2>welcome </h2>
                    <button onClick={Logout}>logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>

    );
}

export default RegisterLogin;
