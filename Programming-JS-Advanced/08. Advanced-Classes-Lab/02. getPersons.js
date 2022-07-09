function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let people = [];

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    people.push(person1);

    let person2 = new Person('SoftUni');
    people.push(person2);

    let person3 = new Person('Stephan', 'Johnson', 25);
    people.push(person3);

    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    people.push(person4);

    return people;
}

console.log(getPersons())