function adAstra(input) {
    let totalCalories = 0;
    let regex = /(#|\|)(?<name>[A-Za-z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<kcal>[0-9]+)\1/g;
    let match = regex.exec(input);
    let finalArray = [];
    while (match !== null) {
        totalCalories += Number(match.groups.kcal);
        finalArray.push(`Item: ${match.groups.name}, Best before: ${match.groups.expiration}, Nutrition: ${match.groups.kcal}`);
        match = regex.exec(input);
    }
    console.log(`You have food to last you for: ${Math.trunc(totalCalories / 2000)} days!`);
    if (finalArray.length >= 1) {
        console.log(finalArray.join('\n'));
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('-----');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('-----');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);