function excursion(input) {

    let people = Number(input[0]);
    let nights = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);

    let priceFor1Person = nights * 20;
    let transportExpenses = transportCards * 1.60;
    let museumExpenses = museumTickets * 6;

    let totalPriceFor1Peson = priceFor1Person + transportExpenses + museumExpenses;
    let priceGroup = totalPriceFor1Peson * people;
    let finalPrice = priceGroup * 1.25;

    console.log(finalPrice.toFixed(2))
}
excursion([131,
    9,
    33,
    46]);