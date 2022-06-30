import a from './Left480.module.css'
import facebook from './../../../assets/facebook.svg';
import instagram from './../../../assets/instagram.svg';
import telegram from './../../../assets/telegram.svg';

const Left480 = () => {
    return (
        <div className={a.left480}>
            <div className={a.lefticons}>
                <img className={a.facebook} src={facebook} alt="" />
                <img className={a.instagram} src={instagram} alt="" />
                <img className={a.telegram} src={telegram} alt="" />
            </div>

            <div className={a.autors}>Authortie <br /> <span className={a.rights}> © Все права защищены</span></div>

        </div>
    );
}

export default Left480;