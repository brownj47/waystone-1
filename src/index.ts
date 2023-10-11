const characterCreationForm = document.querySelector('#character-creation-form') as HTMLFormElement
const characterNameInput = document.querySelector('#character-name-input') as HTMLInputElement
const availablePointsCounter = document.querySelector('#available-points-counter') as Element

class Character {
    constructor(
        public name: string,
        public background: string = 'none',
        public strength: number = 1,
        public dexterity: number = 1,
        public constitution: number = 1,
        public availablePoints: number = 1
    ) {
        this.name = name
        this.background = background
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution

    }

    incrementStat(statName: string): void {
        if (this.availablePoints > 0) {
            console.log("Incrementing: ", statName, (this as any)[statName], "+ 1");
            (this as any)[statName] += 1
            this.availablePoints -= 1
            this._updateStatDisplay(statName, (this as any)[statName])
        } else {
            console.log(`Cannot increment ${statName}, no points available.`)
        }
    }

    decrementStat(statName: string): void {
        if ((this as any)[statName] >= 1) {
            console.log("Decrementing: ", statName, (this as any)[statName], "- 1");
            (this as any)[statName] -= 1
            this.availablePoints += 1
            this._updateStatDisplay(statName, (this as any)[statName])
        } else {
            console.log(`Cannot decrement ${statName} below 1`)
        }
    }

    _updateStatDisplay(statName: string, statValue: number): void {
        console.log(`Updating ${statName} display element to ${statValue}`)
        availablePointsCounter.textContent = this.availablePoints.toString()
        const statCounter = document.querySelector(`#${statName}-counter`) as Element
        statCounter.textContent = statValue.toString()
    }
}

const playerCharacter = new Character('FNU LNU')

characterCreationForm.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault()
    playerCharacter.name = characterNameInput.value
    console.log("CREATED: ", playerCharacter)
})

hydrateStatRadialInputs("strength")
hydrateStatRadialInputs("dexterity")
hydrateStatRadialInputs("constitution")

function hydrateStatRadialInputs(statName: string) {
    const incrementBtn = document.querySelector(`#${statName}-increment`) as Element
    const decrementBtn = document.querySelector(`#${statName}-decrement`) as Element

    incrementBtn.addEventListener('click', (event) => {
        event.preventDefault()
        playerCharacter.incrementStat(statName)
    })

    decrementBtn.addEventListener('click', (event) => {
        event.preventDefault()
        playerCharacter.decrementStat(statName)
    })
}


// when the user types, if the number is between 1 and 5, update the character's strength
