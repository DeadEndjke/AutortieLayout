import a from './Left.module.css'
import logo from './../../../assets/logo.svg'

const Left = () => {
    return (
        <div className={a.left}>
            <a href='/' className={a.logo}><img src={logo} /></a>
            <ul>
                <li><a href='/'>Аналитика</a></li>
                <li><a href='/'>Сообщество</a></li>
                <li><a href='/'>Для организаций</a></li>
            </ul>
        </div>
    );
}

export default Left;