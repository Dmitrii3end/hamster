import React, { useState } from 'react';
import ComboCard from '../ComboCard/ComboCard';
import style from './DailyCombo.module.css';
import { STARTCARDS } from '../../const/const';

const DailyCombo = ({cardsArray}) => {
    const [testCombo, setTestCombo] = useState([STARTCARDS[0], STARTCARDS[1], STARTCARDS[2]]);
    
  return (
    <div>
        <h2 className={style.header}>Комбо карты на 20.08.24 - 21.08.24</h2>

        <div className={style.combo__cards}>
            {testCombo.map((e) => 
                <ComboCard key={e.name} cardName={e.name} cardSection={e.section} cardID={e.id}></ComboCard>
            )}
        </div>

        <div>
            <div>
                <span className={style.info__description}>Стоимость комбо: </span>
                <span className={style.info__value}>500000</span>
            </div>
            <div>
                <span className={style.info__description}>Итоговая рибыль в час: </span>
                <span className={style.info__value}>1200</span>
            </div>
        </div>
    </div>
  )
}

export default DailyCombo
