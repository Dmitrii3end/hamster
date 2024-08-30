import { makeAutoObservable } from "mobx";

class ComboCards{
    cards = [{
        "id": "medium",
        "name": "Cointelegraph",
        "price": 350,
        "image": "Cointelegraph.svg",
        "profitPerHour": 40,
        "condition": null,
        "section": "PR&Team",
        "level": 1,
        "currentProfitPerHour": 0,
        "profitPerHourDelta": 40,
        "isAvailable": true,
        "isExpired": false,
        "startCost": 350,
        "startCurrentProfitPerHour": 40,
        "startPos": 7,
        "value": 8.75
    },
    {
        "id": "risk_management_team",
        "name": "Risk management team",
        "price": 2000,
        "profitPerHour": 265,
        "condition": {
            "_type": "ByUpgrade",
            "upgradeId": "ceo",
            "level": 8
        },
        "section": "PR&Team",
        "level": 1,
        "currentProfitPerHour": 0,
        "profitPerHourDelta": 265,
        "isAvailable": false,
        "isExpired": false,
        "startCost": 2000,
        "startCurrentProfitPerHour": 265,
        "startPos": 20,
        "value": 7.547169811320755
    },
    {
        "id": "business_processes",
            "name": "Setting up business processes",
            "toggle": {
                "enableAt": "2024-08-29T11:00:00.000Z"
            },
            "price": 17000,
            "profitPerHour": 800,
            "condition": null,
            "section": "Specials",
            "level": 1,
            "currentProfitPerHour": 0,
            "profitPerHourDelta": 800,
            "isAvailable": true,
            "isExpired": false
    },];

    constructor(){
        makeAutoObservable(this);
        // fetch()
    }
}

export default new ComboCards()