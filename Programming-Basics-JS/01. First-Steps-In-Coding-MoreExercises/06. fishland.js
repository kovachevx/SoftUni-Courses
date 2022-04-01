function fishland(input) {

    let skumriaPricePerKg = Number(input[0]);
    let TsatsaPricePerKg = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);
    let midi = 7.50;

    let palamudPricePerKg = skumriaPricePerKg * 1.60;
    let safridPricePerKg = TsatsaPricePerKg * 1.80;

    let totalPrice = (palamudPricePerKg * kgPalamud + kgSafrid * safridPricePerKg + kgMidi * midi).toFixed(2);

    console.log(totalPrice);

}

fishland([5.55, 3.57, 4.3, 3.6, 7]);
