function daysInAMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);

// function daysInAMonth(month, year) {
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12: console.log(31);
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11: console.log(30);
//             break;
//         case 2:
//             if (year % 4 === 0) {
//                 console.log(29);
//             } else {
//                 console.log(28);
//             }
//             break;
//     }
// }
// daysInAMonth(1, 2012);
// daysInAMonth(2, 2020);