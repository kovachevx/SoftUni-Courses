function softUniBarIncome(input) {
    let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/g;
    let totalIncome = 0;
    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }
        let match = regex.exec(line);
        if (match === null) {
            continue;
        }
        let totalPrice = Number(match.groups.quantity) * Number(match.groups.price);
        totalIncome += totalPrice;
        console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        match = regex.exec(line);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);