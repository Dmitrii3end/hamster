import React, { useEffect } from 'react';
import style from './MainPage.module.css';
import Container from '../../common/Container/Container';
import DailyCombo from '../../components/DailyCombo/DailyCombo';
import Cards from '../../components/Cards/Cards';
import cardsStore from '../../store/cards';

const MainPage = () => {

  useEffect(() => {
      fetch('https://api.hamsterkombatgame.io/clicker/upgrades-for-buy', {
        method: 'post',
        headers: {
            'authorization': 'Bearer 1725017154583VMQDCqeJkDHoEDwv01RjAvZG4zQ8MDtQKzNEBDDAvIinpa9zY5igrjAA9q4OVbNC1233877756'
        }
    })
      .then(response => response.json())
      .then(json => {
        if (cardsStore.count < json.upgradesForBuy.length){
          cardsStore.addCards(json.upgradesForBuy);
          cardsStore.count = json.upgradesForBuy.length;
        }
      })
  }, []);


  // window.onbeforeunload = () =>{
  //   localStorage.setItem('cards', JSON.stringify(cardsStore.cards));
  //   localStorage.setItem('count', JSON.stringify(cardsStore.count));
  // };

  return (
    <div className={style.mainPage}>
      <Container>
        <DailyCombo></DailyCombo>
        <Cards></Cards>
      </Container>
    </div>
  )
}

export default MainPage
