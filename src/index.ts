class Character {
    constructor(
        public name: string,
        public characterClass: string = 'Fighter',
        public level: number = 1,
        public strength: number = 10,
        public dexterity: number = 10,
        public constitution: number = 10,
        public intelligence: number = 10,
        public wisdom: number = 10,
        public charisma: number = 10,
    ) {
        this.name = name
        this.characterClass = characterClass
        this.level = level
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
    }

}

const characterCreationForm = document.querySelector('#character-creation-form') as HTMLFormElement

const playerCharacter = new Character('FNU LNU')

characterCreationForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault()
    const characterNameInput = (event.target as HTMLFormElement)[0] as HTMLInputElement
    playerCharacter.name = characterNameInput.value
    console.log(playerCharacter)
})

