function exam(input) {
    let totalStudents = Number(input[0]);
    let index = 1;
    let summedGrades = 0;
    let currentGrade = Number(input[index]);
    let top = 0;
    let veryGood = 0;
    let good = 0;
    let fail = 0;

    while (index <= totalStudents) {
        summedGrades += currentGrade;
        if (currentGrade >= 5) {
            top++;
        } else if (currentGrade < 5 && currentGrade >= 4) {
            veryGood++;
        } else if (currentGrade < 4 && currentGrade >= 3) {
            good++;
        } else if (currentGrade < 3) {
            fail++;
        }
        index++;
        currentGrade = Number(input[index]);
    }

    console.log(`Top students: ${(top / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(veryGood / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(good / totalStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / totalStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(summedGrades / totalStudents).toFixed(2)}`);

}

exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"]);