function trekkingMania(input) {

    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {
        let peopleInGroup = Number(input[index]);
        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            montblanc += peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else if (peopleInGroup > 40) {
            everest += peopleInGroup;
        }
        index++;
    }
    totalPeople = musala + montblanc + kilimanjaro + k2 + everest;

    let musalaPercent = musala / totalPeople * 100;
    let montblancPercent = montblanc / totalPeople * 100;
    let kilimanjaroPercent = kilimanjaro / totalPeople * 100;
    let k2Percent = k2 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montblancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}
trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);