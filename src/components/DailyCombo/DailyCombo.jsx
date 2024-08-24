import React from 'react';
import ComboCard from '../ComboCard/ComboCard';
import style from './DailyCombo.module.css';
import comboCardStore from '../../store/comboCard';
import cards from '../../store/cards';

const DailyCombo = () => {
        let cost = comboCardStore.cards.reduce((acc, card) => {
            return cards.getCost(card.name) + acc
        }, 0);
        let profit = comboCardStore.cards.reduce((acc, card) => {
            return cards.getProfitPerHourDelta(card.name) + acc
        }, 0);

  return (
    <div>
        <h2 className={style.header}>Комбо карты на 20.08.24 - 21.08.24</h2>

        <div className={style.combo__cards}>
            {comboCardStore.cards.map((e, id) => 
                <ComboCard key={e} cardID={id}></ComboCard>
            )}
        </div>

        <div>
            <div>
                <span className={style.info__description}>Стоимость комбо: </span>
                <span className={style.info__value}>{cost}</span>
            </div>
            <div>
                <span className={style.info__description}>Итоговая рибыль в час: </span>
                <span className={style.info__value}>{profit}</span>
            </div>
        </div>
    </div>
  )
}

export default DailyCombo
