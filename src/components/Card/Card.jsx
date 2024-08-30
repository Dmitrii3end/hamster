import React from 'react';
import style from './Card.module.css';
import coinImg from '../../assets/coin.webp';
import { URL } from '../../const/const';
import CardsStore from '../../store/cards.js';
import { observer } from 'mobx-react-lite';

const Card = observer(({idCard}) => {
  return (
    <div className={style.card}>
        <div className={style.cardNumber}>{idCard + 1}</div>

        <div className={style.image}>
            <img className={style.card__image} src={CardsStore.cards[idCard].image? require(`../../assets/${CardsStore.cards[idCard].image}`) : `https://hamsterkombatgame.io/images/upgrade/${CardsStore.cards[idCard].id}.webp` } alt={CardsStore.cards[idCard].id} />
        </div>


        <div className={style.info}>
            <p className={style.text}>{CardsStore.cards[idCard].section}</p>

            <p className={style.main_text}>{CardsStore.cards[idCard].name}</p>

            <p  className={style.text}>
                Прибыль в час: <img className={style.coin} src={coinImg} alt="coin" /> <span className={style.value}>{CardsStore.cards[idCard].profitPerHourDelta}</span> 
            </p>
            <p  className={style.text}>
                Стоимость: <img className={style.coin} src={coinImg} alt="coin" /> <span className={style.value}>{CardsStore.cards[idCard].price}</span> 
            </p>

            <p className={style.main_text}>Уровень:</p>

            <div className={style.level}>
                <button className={style.button} onClick={() => {
                    CardsStore.changeCardLvl(idCard, CardsStore.cards[idCard].level - 1);
                    localStorage.setItem('cards', JSON.stringify(CardsStore.cards));
                }}>-</button>
                <input className={style.input} value={CardsStore.cards[idCard].level} type="number" onChange={(e) => {
                    CardsStore.changeCardLvl(idCard, +e.target.value);
                    localStorage.setItem('cards', JSON.stringify(CardsStore.cards));
                    }}/>
                <button className={style.button} onClick={() => {
                    CardsStore.changeCardLvl(idCard, CardsStore.cards[idCard].level + 1);
                    localStorage.setItem('cards', JSON.stringify(CardsStore.cards));
                    }}>+</button>
            </div>
        </div>
    </div>
  )
});

export default Card
