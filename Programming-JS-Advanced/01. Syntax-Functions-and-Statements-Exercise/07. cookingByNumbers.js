function cookingByNumbers(num, ...params) {
    num = Number(num);

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.20;

    for (let func of params) {
        if (func === 'chop') {
            num = chop(num);
        } else if (func === 'dice') {
            num = dice(num);
        } else if (func === 'spice') {
            num = spice(num);
        } else if (func === 'bake') {
            num = bake(num);
        } else if (func === 'fillet') {
            num = fillet(num);
        }
        console.log(num);
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');