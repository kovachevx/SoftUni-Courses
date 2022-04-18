function grades(input) {

    let index = 0;
    let students = Number(input[index]);
    index++;

    let top = 0;
    let good = 0;
    let average = 0;
    let failed = 0;
    let grade = 0;
    let totalGrades = 0;

    for (let i = 1; i <= students; i++) {
        let grade = Number(input[index]);
        index++;
        totalGrades += grade;
        if (grade >= 5) {
            top++;
        } else if (grade < 5.00 && grade >= 4.00) {
            good++;
        } else if (grade < 4.00 && grade >= 3.00) {
            average++;
        } else if (grade < 3.00 && grade >= 2.00) {
            failed++
        }
    }
    let averageGrade = totalGrades / students;
    let topPercentage = top / students * 100;
    let goodPercentage = good / students * 100;
    let averagePercentage = average / students * 100;
    let failedPercentage = failed / students * 100;

    console.log(`Top students: ${topPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averagePercentage.toFixed(2)}%`);
    console.log(`Fail: ${failedPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])