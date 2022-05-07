function triples(n) {
    for (let x = 0; x < n; x++) {
        let xLetter = String.fromCharCode(97 + x);
        for (let y = 0; y < n; y++) {
            let yLetter = String.fromCharCode(97 + y);
            for (let z = 0; z < n; z++) {
                let zLetter = String.fromCharCode(97 + z);
                console.log(`${xLetter}${yLetter}${zLetter}`);
            }
        }
    }
}
triples(2);
triples(3);