function townsToJSON(inputArray) {
    let result = [];
    for (let i = 1; i < inputArray.length; i++) {
        let tokens = inputArray[i].split('|').map(t => t.trim()).filter(x => x);
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
        result.push({ 'Town': town, 'Latitude': Number(latitude), 'Longitude': Number(longitude) });
    }
    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);