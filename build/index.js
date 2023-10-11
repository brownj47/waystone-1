"use strict";
const characterCreationForm = document.querySelector('#character-creation-form');
const characterNameInput = document.querySelector('#character-name-input');
const availablePointsCounter = document.querySelector('#available-points-counter');
class Character {
    constructor(name, background = 'none', strength = 1, dexterity = 1, constitution = 1, availablePoints = 1) {
        this.name = name;
        this.background = background;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.availablePoints = availablePoints;
        this.name = name;
        this.background = background;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
    }
    incrementStat(statName) {
        if (this.availablePoints > 0) {
            console.log("Incrementing: ", statName, this[statName], "+ 1");
            this[statName] += 1;
            this.availablePoints -= 1;
            this._updateStatDisplay(statName, this[statName]);
        }
        else {
            console.log(`Cannot increment ${statName}, no points available.`);
        }
    }
    decrementStat(statName) {
        if (this[statName] >= 1) {
            console.log("Decrementing: ", statName, this[statName], "- 1");
            this[statName] -= 1;
            this.availablePoints += 1;
            this._updateStatDisplay(statName, this[statName]);
        }
        else {
            console.log(`Cannot decrement ${statName} below 1`);
        }
    }
    _updateStatDisplay(statName, statValue) {
        console.log(`Updating ${statName} display element to ${statValue}`);
        availablePointsCounter.textContent = this.availablePoints.toString();
        const statCounter = document.querySelector(`#${statName}-counter`);
        statCounter.textContent = statValue.toString();
    }
}
const playerCharacter = new Character('FNU LNU');
characterCreationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    playerCharacter.name = characterNameInput.value;
    console.log("CREATED: ", playerCharacter);
});
function hydrateStatRadialInputs(statName) {
    const incrementBtn = document.querySelector(`#${statName}-increment`);
    const decrementBtn = document.querySelector(`#${statName}-decrement`);
    incrementBtn.addEventListener('click', (event) => {
        event.preventDefault();
        playerCharacter.incrementStat(statName);
    });
    decrementBtn.addEventListener('click', (event) => {
        event.preventDefault();
        playerCharacter.decrementStat(statName);
    });
}
hydrateStatRadialInputs("strength");
hydrateStatRadialInputs("dexterity");
hydrateStatRadialInputs("constitution");
// when the user types, if the number is between 1 and 5, update the character's strength
