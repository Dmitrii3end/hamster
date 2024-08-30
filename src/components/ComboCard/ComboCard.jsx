import React from 'react';
import style from './ComboCard.module.css';
import comboCardStore from '../../store/comboCard';
import { observer } from 'mobx-react-lite';

const ComboCard = observer(({cardID = 0}) => {
  return (
    <div className={style.card_border}>
        <div className={style.combo__card}>
            <img className={style.combo_image} src={comboCardStore.cards[cardID].image? require(`../../assets/${comboCardStore.cards[cardID].image}`) : `https://hamsterkombatgame.io/images/upgrade/${comboCardStore.cards[cardID].id}.webp` } alt={comboCardStore.cards[cardID].id} alt={comboCardStore.cards[cardID].name} />
            <span className={style.combo__card_section}>{comboCardStore.cards[cardID].section}</span>
            <span className={style.combo__card_name}>{comboCardStore.cards[cardID].name}</span>
        </div>
    </div>
  )
})

export default ComboCard
