import a from './FooterRight.module.css';
import facebook from './../../../assets/facebook.svg';
import instagram from './../../../assets/instagram.svg';
import telegram from './../../../assets/telegram.svg';

const FooterRight = () => {
    return (
        <div className={a.footerright}>
            <img className={a.facebook} src={facebook} alt="" />
            <img className={a.instagram} src={instagram} alt="" />
            <img className={a.telegram} src={telegram} alt="" />
        </div>
    );
}

export default FooterRight;