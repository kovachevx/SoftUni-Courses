function sortBy2Criteria(inputArray) {

    inputArray.sort(sortingCriteria);
    return inputArray.join('\n');

    function sortingCriteria(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }
}
sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
sortBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']);