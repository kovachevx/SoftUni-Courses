function schoolGrades(input) {
    let gradeList = {};

    for (let i = 0; i < input.length; i++) {
        let splitInfo = input[i].split(' ');
        let student = splitInfo.shift();
        let grades = splitInfo.map(Number);

        if (!gradeList.hasOwnProperty(student)) {
            gradeList[student] = [];
        }

        let existing = gradeList[student];

        for (let grade of grades) {
            existing.push(grade);
        }
    }

    let sorted = Object.entries(gradeList);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;
        console.log(`${student}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);