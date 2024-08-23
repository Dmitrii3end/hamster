import React from 'react';
import style from './MainPage.module.css';
import Container from '../../common/Container/Container';
import DailyCombo from '../../components/DailyCombo/DailyCombo';
import Cards from '../../components/Cards/Cards';

const MainPage = () => {
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
