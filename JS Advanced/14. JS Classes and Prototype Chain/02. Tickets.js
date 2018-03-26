function tickets(ticketData, sortMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsortedArr = [];

    for (let line of ticketData) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        unsortedArr.push(new Ticket(destination, price, status));
    }

    let sortedTickets;

    switch (sortMethod) {
        case "destination":
            sortedTickets = unsortedArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedTickets = unsortedArr.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedTickets = unsortedArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return sortedTickets;
}
//tickets(['Philadelphia|94.20|available',
//        'New York City|95.99|available',
//        'New York City|95.99|sold',
//        'Boston|126.20|departed'],
//    'destination')