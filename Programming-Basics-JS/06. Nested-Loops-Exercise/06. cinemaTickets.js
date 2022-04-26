function cinemaTickets(input) {

    index = 0;
    let command = input[index];

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let ticketsForCurrentProjection = 0;

    while (command !== "Finish") {
        let name = command;
        index++;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];

        while (ticketType !== "End") {
            if (ticketType === "Finish") {
                command === "Finish";
                break;

            }
            totalTickets++;
            ticketsForCurrentProjection++;

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            }

            if (ticketsForCurrentProjection >= freeSpace) {
                break;
            }
            index++;
            ticketType = input[index];
        }

        let currentFreeSpace = ticketsForCurrentProjection / freeSpace * 100;
        console.log(`${name} - ${currentFreeSpace.toFixed(2)}% full.`);
        ticketsForCurrentProjection = 0;

        if (ticketType === "Finish") {
            command === "Finish";
            break;
        }
        index++;
        command = input[index];
    }

    let studentTicketsPercent = studentTickets / totalTickets * 100;
    let standardTicketsPercent = standardTickets / totalTickets * 100;
    let kidTicketsPercent = kidTickets / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);