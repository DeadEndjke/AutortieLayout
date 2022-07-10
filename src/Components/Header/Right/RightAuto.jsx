import a from './Right.module.css'
import burger from './../../../assets/burger.svg'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu'


import coolicon1 from './../../../assets/avticon1.svg'
import coolicon2 from './../../../assets/avticon2.svg'
import coolicon3 from './../../../assets/avticon3.svg'



const RightAuto = () => {

    const [openburger, setOpenburger] = useState(false);


    function fopenburger() {
        if (openburger == false) {
            setOpenburger(true);
            document.body.style.position = 'fixed';

        }
        else if (openburger == true) {
            setOpenburger(false);
            document.body.style.position = '';
        }
    }



    return (
        <div className={a.right}>
            <div className={a.coolicons}>
                <img src={coolicon1} alt="" />
                <img src={coolicon2} alt="" />
                <img src={coolicon3} alt="" />
            </div>

            <img className={a.burger} src={burger} alt="" onClick={fopenburger} />

            <div className={a.burgermenu} >
                <BurgerMenu open={openburger} rightburger={0} />
            </div>

        </div>

    );
}

export default RightAuto;