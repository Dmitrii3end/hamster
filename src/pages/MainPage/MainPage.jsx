import React, { useEffect } from 'react';
import style from './MainPage.module.css';
import Container from '../../common/Container/Container';
import DailyCombo from '../../components/DailyCombo/DailyCombo';
import Cards from '../../components/Cards/Cards';
import cardsStore from '../../store/cards';

const MainPage = () => {

  window.onbeforeunload = () =>{
    localStorage.setItem('cards', JSON.stringify(cardsStore.cards));
  };

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
