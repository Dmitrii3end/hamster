import React from 'react';
import style from './ComboCard.module.css';

const ComboCard = ({cardName, cardSection, cardID = 'ceo'}) => {
  return (
    <div className={style.card_border}>
        <div className={style.combo__card}>
            <img className={style.combo_image} src={`https://hamsterkombatgame.io/images/upgrade/${cardID}.webp`} alt={cardName} />
            <span className="combo__card_section">{cardSection}</span>
            <span className="combo__card_name">{cardName}</span>
        </div>
    </div>
  )
}

export default ComboCard
