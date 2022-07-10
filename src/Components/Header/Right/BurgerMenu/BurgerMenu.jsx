import a from './BurgerMenu.module.css'
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ open, rightburger }) => {
    return (

        <div className={a.burgermenu}>

            {
                (() => {
                    switch (open) {
                        case true: {
                            return (<ul className={a.menu}>
                                <li>Аналитика</li>
                                <li>Сообществo</li>
                                <li>Для организаций</li>
                                <div className={a.hiddenlinks}>

                                    {rightburger ?
                                        <div>
                                            <li>location</li>
                                            <li onClick={open = true}>
                                                <NavLink to={'/login'} >enter</NavLink>
                                            </li>

                                        </div> : <div><li>Сообщения</li>
                                            <li>Уведомления</li>
                                            <li>Профиль</li>
                                        </div>
                                    }
                                </div>
                            </ul>);
                        }
                    }
                })()
            }






        </div>
    );
}

export default BurgerMenu; 