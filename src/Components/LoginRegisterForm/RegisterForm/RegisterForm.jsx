import a from './RegisterForm.module.css'
import { useState } from 'react';

const RegisterForm = ({ Register, error }) => {
    const [regdetails, setRegdetails] = useState({ email: '', password: '', repeatpassword: '' });



    const submitHandler = e => {
        e.preventDefault();
        Register(regdetails);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={a.registerform}>

                <div className={a.formgroup}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" onChange={e => setRegdetails({ ...regdetails, email: e.target.value })} value={regdetails.email} />
                </div>
                <div className={a.formgroup}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" onChange={e => setRegdetails({ ...regdetails, password: e.target.value })} value={regdetails.password} />
                </div>

                <div className={a.formgroup}>
                    <label htmlFor="repeatpassword">Повторите пароль</label>
                    <input type="password" name="repeatpassword" id="repeatpassword" onChange={e => setRegdetails({ ...regdetails, repeatpassword: e.target.value })} value={regdetails.repeatpassword} />
                </div>
                <div className={a.policyprival}><input type="checkbox" required /><span className={a.checkboxtext}> Я принимаю условия Пользовательского соглашения и даю своё согласие на обработку персональных данных на условиях, определенных Политикой конфиденциальности.</span></div>

                <div className={a.submit}> <input type="submit" value="Регистрация" /></div>
                {(error != '') ? (<div className={a.error}>
                    {error}
                </div>) : ''}</div>
        </form>
    );
}

export default RegisterForm;