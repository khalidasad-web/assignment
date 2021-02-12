// https://github.com/khalidasad-web/assignment

function kilometerToMeter(kilometer) {
    // Kilometer to Meter conversion function
    // return meter
    if (kilometer > 0) {
        return parseInt(kilometer) * 1000;
    } else {
        console.log("Please enter a positive value for kilometer");
        return 0;
    }
}

function budgetCalculator(watchNo, phoneNo, laptopNo) {
    // Parameter watch quantity, phone quantity , laptop quantity
    // return totalPrice
    let watchPrice = 50;
    let phonePrice = 100;
    let laptopPrice = 500;
    let totalPrice = 0;
    if ( watchNo < 0 || phoneNo < 0 || laptopNo < 0 ) {
        console.log("Please enter positive value for items");
        return 0;
    } else {
        totalPrice = (watchNo * watchPrice) + (phoneNo * phonePrice) + (laptopNo * laptopPrice);
        return totalPrice;
    }
}

function hotelCost() {
    // Parameter number of days
    // return totalCost
}

function megaFriend() {
    // Parameter array of friends
    // return largest name
}

const kiloMeter = 25;
const convertedMeter = kilometerToMeter( kiloMeter );
console.log( 'Meter:' , convertedMeter );

const watchQty = 15;
const phoneQty = 5;
const laptopQty = 5;
const totalPriceItem = budgetCalculator( watchQty, phoneQty, laptopQty );
console.log( 'Total Price:' , '$ ' + totalPriceItem );