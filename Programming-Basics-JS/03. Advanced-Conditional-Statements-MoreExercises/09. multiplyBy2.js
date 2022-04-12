function multiplyBy2(input) {

   let index = 0;
   
    for (i = 1; i > 0; i++) {
        let num = Number(input[index]);
        index++;
        if (num >= 0) {
            console.log(`Result: ${(num * 2).toFixed(2)}`);
        } else {
            console.log(`Negative number!`);
            break;
        }
    }
}
multiplyBy2([12, 43.2144, 12.3, 543.23, 5, -20])