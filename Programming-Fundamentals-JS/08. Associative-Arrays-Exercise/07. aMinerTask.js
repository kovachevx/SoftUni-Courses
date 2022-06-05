function aMinerTask(input) {
    let materials = {};
    for (let i = 0; i < input.length; i += 2) {
        let mat = input[i];
        let quantity = Number(input[i + 1]);
        if (!materials.hasOwnProperty(mat)) {
            materials[mat] = 0;
        }
        materials[mat] += quantity;
    }
    for (let el in materials) {
        console.log(`${el} -> ${materials[el]}`);
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);