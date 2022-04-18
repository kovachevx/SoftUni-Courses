function footballLeague(input) {

    index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;
    let totalFans = Number(input[index]);
    index++;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (i = 1; i <= totalFans; i++) {
        let sector = input[index];
        index++;
        switch (sector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }
    let sectorAPercentage = sectorA / totalFans * 100;
    let sectorBPercentage = sectorB / totalFans * 100;
    let sectorVPercentage = sectorV / totalFans * 100;
    let sectorGPercentage = sectorG / totalFans * 100;
    let stadiumPercentage = totalFans / stadiumCapacity * 100;

    console.log(sectorAPercentage.toFixed(2) + "%");
    console.log(sectorBPercentage.toFixed(2) + "%");
    console.log(sectorVPercentage.toFixed(2) + "%");
    console.log(sectorGPercentage.toFixed(2) + "%");
    console.log(stadiumPercentage.toFixed(2) + "%");
}
footballLeague([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);