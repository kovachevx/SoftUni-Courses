function fancyBarcodes(input) {
    let n = Number(input.shift());
    let regex = /@#+(?<barcode>[A-Z][A-Za-z0-9]+[A-Z])@#+/g;
    for (let line of input) {
        let match = regex.exec(line);
        if (match !== null) {
            let group = '';
            for (let char of match.groups.barcode) {
                char = Number(char)
                if (!isNaN(char)) {
                    group += char;
                }
            }
            if (group !== '') {
                console.log(`Product group: ${group}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }
        match = regex.exec(line);
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
console.log('------');
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);