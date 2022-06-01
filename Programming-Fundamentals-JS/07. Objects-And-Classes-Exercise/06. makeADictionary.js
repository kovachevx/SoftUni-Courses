function makeADictionary(input) {
    let dictionaryTerms = [];
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let parsed = JSON.parse(input[i]);
        let value = Object.values(parsed).shift();
        let term = Object.keys(parsed).shift();
        if (dictionaryTerms.indexOf(term) === -1) {
            dictionaryTerms.push(term);
        }
        obj[term] = value;
    }
    dictionaryTerms.sort((a, b) => a.localeCompare(b));
    for (let term of dictionaryTerms) {
        console.log(`Term: ${term} => Definition: ${obj[term]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Boiler":"Something warming up water"}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);






// function makeADictionary(input) {
//     let dictionary = [];
//     for (let i = 0; i < input.length; i++) {
//         let parsed = JSON.parse(input[i]);
//         dictionary.push(parsed);
//     }
//     let terms = [];
//     for (let j = 0; j < dictionary.length; j++) {
//         let term = Object.keys(dictionary[j]);
//         let pending = term.shift();
//         terms.push(pending);
//         terms.sort((a, b) => a.localeCompare(b))
//     }
//     for (let term of terms) {
//         for (let k = 0; k < dictionary.length; k++) {
//             if (dictionary[k][term] !== undefined) {
//                 console.log(`Term: ${term} => Definition: ${dictionary[k][term]}`);
//             }
//         }
//     }
// }
// makeADictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]);