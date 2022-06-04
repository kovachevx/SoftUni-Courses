function piccolo(input) {
    let map = new Map();

    for (let car of input) {
        let tokens = car.split(', ');
        let direction = tokens[0];
        let plate = tokens[1];
        if (direction === 'IN') {
            map.set(plate, direction);
        } else {
            map.delete(plate, direction)
        }
    }
    if (map.size === 0) {
        console.log("Parking Lot is Empty");
    }

    let sorted = Array.from(map).sort();
    
    for (let plate of sorted) {
        console.log(plate[0])
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);