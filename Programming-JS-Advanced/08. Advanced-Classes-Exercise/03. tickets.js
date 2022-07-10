function tickets(inputArray, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let line of inputArray) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    }

    if (criteria === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    } else {
        result.sort((a, b) => a.price - b.price);
    }

    return result;
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');