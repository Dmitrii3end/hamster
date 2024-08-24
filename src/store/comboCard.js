import { makeAutoObservable } from "mobx";

class ComboCards{
    cards = [{
        "id": "ceo",
        "name": "CEO",
        "price": 1000,
        "profitPerHour": 100,
        "condition": null,
        "section": "PR&Team",
        "level": 1,
        "currentProfitPerHour": 0,
        "profitPerHourDelta": 100,
        "isAvailable": true,
        "isExpired": false,
        "startCost": 1000,
        "startCurrentProfitPerHour": 100,
        "startPos": 0,
        "value": 10
    },
    {
        "id": "marketing",
        "name": "Marketing",
        "price": 1000,
        "profitPerHour": 70,
        "condition": null,
        "section": "PR&Team",
        "level": 1,
        "currentProfitPerHour": 0,
        "profitPerHourDelta": 70,
        "isAvailable": true,
        "isExpired": false,
        "startCost": 1000,
        "startCurrentProfitPerHour": 70,
        "startPos": 1,
        "value": 14.285714285714286
    },
    {
        "id": "it_team",
        "name": "IT team",
        "price": 2000,
        "profitPerHour": 240,
        "condition": null,
        "section": "PR&Team",
        "level": 1,
        "currentProfitPerHour": 0,
        "profitPerHourDelta": 240,
        "isAvailable": true,
        "isExpired": false,
        "startCost": 2000,
        "startCurrentProfitPerHour": 240,
        "startPos": 2,
        "value": 8.333333333333334
    },];

    constructor(){
        makeAutoObservable(this);
        // fetch()
    }
}

export default new ComboCards()