function amazingNumbers(num) {

    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

}
amazingNumbers(1233);
amazingNumbers(999);

// function amazingNumbers(num) {

//     num = num.toString();
//     let sum = 0;
//     let isAmazing = 'False';

//     for (let i = 0; i < num.length; i++) {
//         sum += Number(num[i]);
//     }

//     sum = sum.toString()

//     for (let y = 0; y < sum.length; y++) {
//         if (sum[y] == 9) {
//             isAmazing = 'True';
//         }
//     }
//     console.log(`${num} Amazing? ${isAmazing}`);
// }
// amazingNumbers(1233);
// amazingNumbers(999);