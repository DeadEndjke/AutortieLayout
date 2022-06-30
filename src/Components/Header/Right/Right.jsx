import a from './Right.module.css'
import planet from './../../../assets/planet.svg'
import enter from './../../../assets/enter.svg'
import burger from './../../../assets/burger.svg'

const Right = () => {
    return (
        <div className={a.right}>
            <button> <div className={a.title1}>создать заявку</div><div className={a.title2}>+ заявка</div> </button>
            <img className={a.planet} src={planet} alt="" />
            <img className={a.enter} src={enter} alt="" />
            <img className={a.burger} src={burger} alt="" />
        </div>

    );
}

export default Right;