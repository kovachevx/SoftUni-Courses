function race(text) {
    let racers = text.shift().split(', ');
    let racersObj = {};
    for (let racer of racers) {
        racersObj[racer] = 0;
    }
    for (let line of text) {
        if (line === 'end of race') {
            break;
        }
        let name = line.match(/[A-Z]+/gi).join('');
        let distanceInDigits = line.match(/\d/g);
        distanceInDigits = distanceInDigits.map(Number);
        if (racersObj.hasOwnProperty(name)) {
           for (let meters of distanceInDigits) {
             racersObj[name] += Number(meters);
           }
        }
    }
  let sorted = Object.entries(racersObj);
  sorted.sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);