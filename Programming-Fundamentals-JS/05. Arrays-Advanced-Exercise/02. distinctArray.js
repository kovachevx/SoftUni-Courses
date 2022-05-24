function distinctArray(arrayInput) {

    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = i + 1; j <= arrayInput.length; j++) {
            if (arrayInput[j] === arrayInput[i]) {
                arrayInput.splice(j, 1);
                j--;
            }
        }
    }

    console.log(arrayInput.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);