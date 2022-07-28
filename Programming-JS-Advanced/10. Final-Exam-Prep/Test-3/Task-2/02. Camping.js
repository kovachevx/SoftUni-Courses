class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (condition !== "child" && condition !== "student" && condition !== "collegian") {
            throw new Error("Unsuccessful registration at the camp.");
        };

        let nameInList = this.listOfParticipants.find(n => n.name == name);

        if (nameInList !== undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(participant);
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        let nameInList = this.listOfParticipants.find(n => n.name == name);
        if (nameInList === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            let indexOfParticipant = this.listOfParticipants.indexOf(nameInList);
            this.listOfParticipants.splice(indexOfParticipant, 1);
            return `The ${name} removed successfully.`
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        let participant1InList = this.listOfParticipants.find(n => n.name == participant1);
        let participant2InList = this.listOfParticipants.find(n => n.name == participant2);

        if (participant1InList === undefined) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === 'WaterBalloonFights') {
            if (participant2InList === undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (participant1InList.condition !== participant2InList.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (participant1InList.power === participant2InList.power) {
                return 'There is no winner.'
            } else if (participant1InList.power > participant2InList.power) {
                participant1InList.wins++;
                return `The ${participant1InList.name} is winner in the game ${typeOfGame}.`
            } else {
                participant2InList.wins++;
                return `The ${participant2InList.name} is winner in the game ${typeOfGame}.`
            }

        } else if (typeOfGame === 'Battleship') {
            participant1InList.power += Number(20);
            return `The ${participant1InList.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let message = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let participant of this.listOfParticipants) {
            message.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }
        return message.join('\n');
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

