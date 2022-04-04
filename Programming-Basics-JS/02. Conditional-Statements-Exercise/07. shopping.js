function shopping(input) {

    let budget = Number(input[0]);
    let GPUCount = Number(input[1]);
    let CPUCount = Number(input[2]);
    let RamCount = Number(input[3]);

    let priceCPU = (250 * GPUCount) * 0.35;
    let priceRam = (250 * GPUCount) * 0.10;

    let totalPrice = GPUCount * 250 + CPUCount * priceCPU + RamCount * priceRam;

    if (GPUCount > CPUCount) {
        totalPrice = totalPrice * 0.85;
    }

    let diff = Math.abs(budget - totalPrice).toFixed(2);
    if (budget >= totalPrice) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }

}
shopping([920.45, 3, 1, 1]);