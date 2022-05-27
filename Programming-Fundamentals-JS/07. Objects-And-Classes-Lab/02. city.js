function city(Obj) {
    let objEntries = Object.entries(Obj);
    for (let [key, value] of objEntries) {
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})



// function city(Obj) {
//     for (let key of Object.keys(Obj)) {
//         console.log(`${key} -> ${Obj[key]}`)
//     }
// }
// city({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// })