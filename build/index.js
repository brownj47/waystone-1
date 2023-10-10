"use strict";
class Character {
    constructor(name, characterClass = 'Fighter', level = 1, strength = 10, dexterity = 10, constitution = 10, intelligence = 10, wisdom = 10, charisma = 10) {
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }
}
const characterCreationForm = document.querySelector('#character-creation-form');
const playerCharacter = new Character('FNU LNU');
characterCreationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const characterNameInput = event.target[0];
    playerCharacter.name = characterNameInput.value;
    console.log(playerCharacter);
});
