function towns(input) {
    let city = {};
    for (let el of input) {
        let splitEl = el.split(' | ');
        city.town = splitEl[0];
        city.latitude = Number(splitEl[1]).toFixed(2);
        city.longitude = Number(splitEl[2]).toFixed(2);
        console.log(city);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);