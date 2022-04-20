function examPreparation(input) {

    let negativeGrades = Number(input[0]);
    let index = 1;
    let sumOfGrades = 0;
    let negativeGradesCounter = 0;
    let taskCounter = 0;
    let lastTask = "";

    while (negativeGradesCounter < negativeGrades) {
        let taskName = input[index];
        index++;
        let currentGrade = Number(input[index]);
        index++

        if (taskName === "Enough") {
            let averageGrade = sumOfGrades / taskCounter;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${taskCounter}`);
            console.log(`Last problem: ${lastTask}`)
            break;
        }
        if (currentGrade <= 4) {
            negativeGradesCounter++;
        }

        taskCounter++;
        sumOfGrades += currentGrade;
        lastTask = taskName;

    }
    if (negativeGradesCounter === negativeGrades) {
        console.log(`You need a break, ${negativeGrades} poor grades.`);
    }
}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);