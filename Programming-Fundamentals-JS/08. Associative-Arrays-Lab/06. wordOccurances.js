function wordOccurances(input) {
    let map = new Map();
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let wordCount = Number;
        if (!map.has(input[i])) {
            obj[input[i]] = 1;
            map.set(input[i], 1);
        } else {
            map.set(input[i], ++obj[input[i]]);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('--------------');
wordOccurances(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);