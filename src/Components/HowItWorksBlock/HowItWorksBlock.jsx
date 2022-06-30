import a from './HowItWorksBlock.module.css';
import card1 from './../../assets/1card.svg'
import card2 from './../../assets/2card.svg'
import card3 from './../../assets/3card.svg'
import card4 from './../../assets/4card.svg'
import Card from './Card/Card';

const HowItWorksBlock = () => {
    return (
        <div className={a.howitworksblockcontainer}>
            <div className={a.howitworksblock}>

                <h1 className={a.title}>Как это работает</h1>
                <div className={a.cards}>


                    <Card image={card1} text={'Оцените привлекательность темы'} />
                    <Card image={card2} text={'Выполните совместные исследования'} />
                    <Card image={card3} text={'Улучшите написанную работу'} />
                    <Card image={card4} text={' Продвиньте свою работу'} />


                </div>
                <div className={a.visiblecards}>
                    <div className={a.row}>
                        <Card image={card1} text={'Оцените привлекательность темы'} />

                        <Card image={card3} text={'Улучшите написанную работу'} />
                    </div>
                    <div className={a.row}>
                        <Card image={card2} text={'Выполните совместные исследования'} />
                        <Card image={card4} text={' Продвиньте свою работу'} />
                    </div>
                </div>

            </div>


        </div>

    );
}

export default HowItWorksBlock;