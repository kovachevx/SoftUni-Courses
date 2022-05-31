function cats(input) {
    let cats = [];
    class CatClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ');
        let [name, age] = [catData[0], catData[1]];
        cats.push(new CatClass(name, age));
        meow(name, age);
    }

    function meow(name, age) {
        console.log(`${name}, age ${age} says Meow`);
    }

}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);