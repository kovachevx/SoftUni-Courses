function destinationMapper(input) {
    let regex = /(=|\/)(?<country>[A-Z][A-Za-z]{2,})\1/g;
    let match = regex.exec(input);
    let travelPoints = 0;
    let destinations = [];
    while (match !== null) {
        travelPoints += Number(match.groups.country.length);
        destinations.push(match.groups.country);
        match = regex.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('------');
destinationMapper("ThisIs some InvalidInput");
