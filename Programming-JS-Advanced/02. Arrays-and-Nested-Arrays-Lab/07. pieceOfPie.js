function pieceOfPie(inputArray, start, end) {
    let startIndex = inputArray.indexOf(start);
    let endIndex = inputArray.indexOf(end);
    let newArray = inputArray.slice(startIndex, endIndex + 1);
    return newArray;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');