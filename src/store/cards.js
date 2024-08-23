import { makeAutoObservable } from "mobx";
import { STARTCARDS } from "../const/const";
import { COSTCARDCOEFFICIENT, COSTCARDCOEFFICIENTMULT } from "../const/const";

class CardsStore {
    cards = [...STARTCARDS];

    constructor(){
        makeAutoObservable(this);
    }

    sortByValue(){
        this.cards = this.cards.sort((a, b) => a.value - b.value);
    }

    sortBySection(){
        console.log('sortBySection')
        this.cards = this.cards.sort((a, b) => a.startPos - b.startPos);
    }

    setCards(payload){
        this.cards = payload;
    }

    changeCardLvl(id, newLvl){
        let cards = this.cards;

        if (newLvl < 0) newLvl = 0;
        if (newLvl > 30) newLvl = 30;
        cards[id].level = newLvl;

        cards[id].price = getCost(newLvl, cards[id].startCost);
        cards[id].currentProfitPerHour = getLvlProfit(newLvl, cards[id].startCurrentProfitPerHour);
        cards[id].profitPerHourDelta = getProfit(newLvl, cards[id].startCurrentProfitPerHour);
        cards[id].value = cards[id].price / cards[id].profitPerHourDelta;
        this.setCards(cards);
    }

    get level(){
        return this.level;
    }

    get name(){
        return this.name;
    }

    get id(){
        return this.id;
    }

    get currentProfitPerHour(){
        return this.currentProfitPerHour;
    }
}

function getCost(lvl, startCost){
    if (lvl === 0) return startCost;
    if (lvl === 1) return Math.round(startCost * COSTCARDCOEFFICIENT);

    let koef = COSTCARDCOEFFICIENT;
    let newCost = startCost * COSTCARDCOEFFICIENT

    for (let i = 1; i < lvl; i++){
        newCost = newCost * koef * COSTCARDCOEFFICIENTMULT;
        koef *= COSTCARDCOEFFICIENTMULT;
    }

    return Math.round(newCost);
}

function getProfit(lvl, startProfit){
    return Math.round(startProfit * Math.pow(1.07, lvl));
}

function getLvlProfit(lvl, starProfit){
    return starProfit * (Math.pow(1.07, lvl) - 1) / (1.07 - 1);
}

export default new CardsStore()