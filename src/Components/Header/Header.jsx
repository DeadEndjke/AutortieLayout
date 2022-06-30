import a from './Header.module.css'
import Left from './Left/Left'
import Right from './Right/Right';

const Header = () => {
    return (

        <div className={a.headercontainer}>
            <div className={a.header}>
                <Left />
                <Right />
            </div>

        </div>
    );
}

export default Header;