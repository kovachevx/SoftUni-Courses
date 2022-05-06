function rightPlace(string, char, result) {

    let output = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '_') {
            output += char;
        } else {
            output += String(string[i]);
        }
    }

    console.log(output === result ? 'Matched' : 'Not Matched');

}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');


/* function rightPlace(string, char, result){
    let res = string.replace('_', char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
*/

// function rightPlaces(word, char, res) {
//     let result = word.replace('_', char);
//     let output = res === result ? 'Matched' : 'Not Matched';
//     console.log(output);
// }
// rightPlaces('kov_i', 'd', 'kovdi');
