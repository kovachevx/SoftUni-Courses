function deposit(input){

    let depositedAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterest = Number(input[2]);

    let monthlyInterest = depositedAmount * annualInterest;

    let finalSum = depositedAmount + depositTerm * ((depositedAmount * annualInterest / 100) / 12);

    console.log(finalSum);

}

deposit(["200", "3", "5.7"]);