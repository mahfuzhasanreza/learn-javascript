class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log('vehicle is moving');
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}