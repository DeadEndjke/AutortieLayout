import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm';
import a from './Header.module.css'
import Left from './Left/Left'
import RightAuto from './Right/RightAuto';
import RightDefault from './Right/RightDefault';



const HeaderAuto = () => {
    return (

        <div className={a.headercontainer}>
            <div className={a.header}>
                <Left />

                {/* <RightDefault /> */}
                <RightAuto />
            </div>

        </div>
    );
}

export default HeaderAuto;