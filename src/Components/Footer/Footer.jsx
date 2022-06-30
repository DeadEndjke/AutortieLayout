import a from './Footer.module.css'
import FooterLeft from './Left/FooterLeft';
import Left480 from './Left480/Left480';
import FooterRight from './Right/FooterRight';
import Right480 from './Right480/Right480';

const Footer = () => {
    return (
        <div className={a.footer}>
            <div className={a.footercontainer}>
                <div className={a.footeritem}>
                    <FooterLeft />
                    <FooterRight />
                </div>
                <div className={a.footeritem1024}>
                    <FooterLeft />
                    <li className={a.footer1024}>Authortie <br /> <span className={a.rights}> © Все права защищены</span></li>
                    <FooterRight />
                </div>
                <div className={a.footeritem689}>
                    <Left480 /><Right480 />
                </div>
            </div>
        </div>
    );
}

export default Footer;