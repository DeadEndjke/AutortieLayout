import a from './LeftBlock.module.css'

const LeftBlock = () => {
    return (
        <div className={a.leftblock}>
            <h1 className={a.title}>Сообщество взаимопомощи между учёными со всего мира</h1>
            <p className={a.paragraph1}>Удобный сервис, который подберёт для вас коллег и поможет наладить с ними взаимовыгодное сотрудничество в областях совместных исследований, соавторства, рецензирования и повышения индекса цитирования.</p>
            <p className={a.paragraph2}>Аналитика, соавторство, рецензирование и
                продвижение научных работ.</p>
            <button className={a.enterbutton}>присоединиться</button>
        </div>
    );
}

export default LeftBlock;