function furniture(text) {
    let totalSum = 0;
    console.log('Bought furniture:');
    let regex = />>(?<name>[A-Z][a-z|A-Z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
    for (let line of text) {
        if (line === 'Purchase') {
            break;
        }
        let exp = regex.exec(line);
        if (exp === null) {
            continue;
        }
        regex.exec(line);
        console.log(exp.groups.name);
        totalSum += Number(exp.groups.price) * Number(exp.groups.quantity);
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);