function sortArrayBy2Criteria(inputArray) {
    let sortedAlphabetically = inputArray.sort((a, b) => a.localeCompare(b));
    let sortedByLength = sortedAlphabetically.sort((a, b) => a.length - b.length);

    console.log(sortedAlphabetically.join('\n'));
}
sortArrayBy2Criteria(['alpha', 'beta', 'gamma', 'Ceta']);
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);