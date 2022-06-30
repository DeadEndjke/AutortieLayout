import a from './CommunityCard.module.css'
import price from './../../../assets/price.svg';
import key from './../../../assets/key.svg';
import avatar from './../../../assets/avatar.png';
import flag from './../../../assets/flag.svg';
import next from './../../../assets/next.svg';

const CommunityCard = () => {
    return (
        <div className={a.communitycard}>
            <div className={a.communitycardcontainer}>
                <div className={a.hashtags}>
                    <span className={a.yellow}>цитировать других</span>
                    <span className={a.green}>Neuro/Psycho</span>
                </div>
                <p className={a.paragraphcontent}>Вопросы проектирования трансатлантического межнационального продуктопровода в условиях нарастающей коронавирусной пандемии</p>
                <p className={a.paragraphcontentvivble}>Вопросы проектирования трансатлантического межнационального продуктопрово...</p>
                <div className={a.comment}>Комментарий</div>
                <div className={a.commenttext}>Могу ещё помочь со статистической обработкой </div>
                <div className={a.comment}>Вознаграждение</div>
                <div className={a.award}><img src={price} alt="" /> <span className={a.price}>$1000</span></div>
                <div className={a.keys}>
                    <div className={a.key}> <img src={key} alt="" /> ключ</div>
                    <div className={a.key}>+1</div>
                </div>

                <div className={a.scientist}>
                    <img className={a.avatar} src={avatar} alt="" />
                    <div className={a.name}>Артём Белоусов <img src={flag} alt="" /></div>
                    <div className={a.description}>учёный (кандидат наук)</div>
                    <div className={a.description}>Санкт-Петербургский горный университет</div>
                </div>

                <button className={a.btn}>Предложить сотрудничество</button>
                <button className={a.nextbtn}> <img src={next} alt="" /></button>

            </div>


        </div>
    );
}
export default CommunityCard;