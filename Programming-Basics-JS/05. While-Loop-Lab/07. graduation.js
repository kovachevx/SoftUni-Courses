function graduation(input) {

    let name = input[0];
    let gradeCounter = 1;
    let allGrades = 0;
    let excluded = 0;
    let index = 0;

    while (gradeCounter <= 12) {
        index++;
        let grade = Number(input[index]);

        if (grade < 4.00) {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${gradeCounter} grade`);
                break;
            }
            continue;
        }
        allGrades += grade;
        gradeCounter++;
    }
    if (excluded <= 1) {
        let avgGrade = allGrades / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Mimi", 5, 6, 5, 6, 5, 6, 6, 2, 3, 5.43, 5]);
