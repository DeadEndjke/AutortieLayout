import a from './Right.module.css'
import planet from './../../../assets/planet.svg'
import enter from './../../../assets/enter.svg'
import burger from './../../../assets/burger.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'


const RightDefault = () => {

    const [openburger, setOpenburger] = useState(false);


    function fopenburger() {
        if (openburger == false) {
            setOpenburger(true);
            console.log(openburger);
            document.body.style.position = 'fixed';
        }
        else if (openburger == true) {
            setOpenburger(false);
            console.log(openburger);
            document.body.style.position = '';
        }
    }



    return (
        <div className={a.right}>
            <button className={a.createbutton}> <div className={a.title1}>создать заявку</div><div className={a.title2}>+ заявка</div> </button>
            <img className={a.planet} src={planet} alt="" />
            <NavLink to={'/login'} >
                <img className={a.enter} src={enter} alt="" />
            </NavLink>

            <img className={a.burger} src={burger} alt="" onClick={fopenburger} />

            <div className={a.burgermenu} >
                <BurgerMenu open={openburger} rightburger={1} />
            </div>
        </div>

    );
}

export default RightDefault;