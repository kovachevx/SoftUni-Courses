function trainTheTrainers(input) {

    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let finalAverageGrade = 0;
    let presentationCounter = 0;

    while (command !== "Finish") {
        let name = command;
        let presentationsSumGrade = 0;
        presentationCounter++;

        for (let i = 0; i < juryCount; i++) {
            let currentGrade = Number(input[index]);
            index++;
            presentationsSumGrade += currentGrade;
        }
        let averagePresentationGrade = presentationsSumGrade / juryCount;
        console.log(`${name} - ${averagePresentationGrade.toFixed(2)}.`);
        finalAverageGrade += averagePresentationGrade;
        command = input[index];
        index++;
    }
    let finals = finalAverageGrade / presentationCounter;
    console.log(`Student's final assessment is ${finals.toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])