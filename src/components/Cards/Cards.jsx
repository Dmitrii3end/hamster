import React, { useState } from 'react';
import style from './Cards.module.css';
import { observer } from 'mobx-react-lite';
import CardsStore from '../../store/cards.js';
import Card from '../Card/Card';

const Cards = observer(() => {
    const [sorted, setSorted] = useState(true);
    console.log(CardsStore.cards)

    function sort(){
        sorted ? CardsStore.sortByValue() : CardsStore.sortBySection();
        setSorted(!sorted);
    }
  return (
    <div className={style.cards}>
        <button onClick={() => sort()}>сортировать по {sorted? 'прибыли' : 'порядку'}</button>
      {CardsStore.cards.map((card, id) => 
        <Card key={card.id} idCard={id}></Card>
        )}
    </div>
  )
});

export default Cards
