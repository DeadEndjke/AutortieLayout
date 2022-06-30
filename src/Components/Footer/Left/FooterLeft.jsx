import a from './FooterLeft.module.css';

const FooterLeft = () => {
    return (
        <div className={a.footerleft}>
            <ul>
                <div className={a.footerlefttitle}><li>Authortie <br /> <span className={a.rights}> © Все права защищены</span></li></div>
                <li><a href='/'>Политика конфиденциальности</a></li>
                <li><a href='/'>Аналитика</a></li>
                <li><a href='/'>Сообщество</a></li>
                <li><a href='/'>Для организаций</a></li>
            </ul>
        </div>
    );
}

export default FooterLeft;