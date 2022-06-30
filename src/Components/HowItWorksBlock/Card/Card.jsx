import a from './Card.module.css'

const Card = (props) => {
    return (
        <div className={a.card}>
            <div className={a.block}>
                <img src={props.image} alt="" />
            </div>
            <p className={a.text}>{props.text}</p>
        </div>
    );
}

export default Card;