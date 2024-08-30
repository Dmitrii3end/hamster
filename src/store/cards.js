import { makeAutoObservable } from "mobx";
import { STARTCARDS } from "../const/const";
import { COSTCARDCOEFFICIENT, COSTCARDCOEFFICIENTMULT } from "../const/const";

class CardsStore {
    cards = [];

    constructor(){
        makeAutoObservable(this);

        let cards = localStorage.getItem('cards');

        cards? this.update(JSON.parse(cards)) : this.cards = [...STARTCARDS];
    }

    // sortByValue(){
    //     this.cards = this.cards.sort((a, b) => a.value - b.value);
    // }

    sortByValue(){
        let nowDay = new Date();
    
        this.cards.sort((a, b) =>{
            if (((a.expiresAt == undefined) || (nowDay < new Date(a.expiresAt))) && ((b.expiresAt == undefined) || (nowDay < new Date(b.expiresAt)))){
                return a.value - b.value;
            }
    
            if (a.expiresAt == undefined) return -1;
    
            return 1;
        })
    }   
    
    addCards(newArr){
        let arr = [...this.arr]
        if (arr.length == newArr.length) return
    
        arr.sort((a, b) => a.startPos - b.startPos);
    
        newArr.forEach((element) => {
            if (element.profitPerHour){
                if (!arr.find((e) => e.name == element.name)){
                    element.startCost = element.cost;
                    element.startCurrentProfitPerHour = element.profitPerHourDelta;
                    element.value = element.cost / element.profitPerHourDelta;

                    arr.push(element);
                }
            }
        });

        arr.sort((a, b) => a.section - b.section);
        arr.forEach((e, id) => e.startPos = id);

        this.cards = [...arr];
    }

    update(cardsArray){
        this.cards = [...cardsArray];
    }

    sortBySection(){
        this.cards = this.cards.sort((a, b) => a.startPos - b.startPos);
    }

    setCards(payload){
        this.cards = payload;
    }

    getCost(cardName){
        let card = this.cards.find((e) => e.name === cardName)
        return card? card.price : 0;
    }

    getProfitPerHourDelta(cardName){
        let card = this.cards.find((e) => e.name === cardName)
        return card? card.profitPerHourDelta : 0;
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