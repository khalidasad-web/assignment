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
    if (watchNo < 0 || phoneNo < 0 || laptopNo < 0) {
        console.log("Please enter positive value for items");
        return 0;
    } else {
        return (watchNo * watchPrice) + (phoneNo * phonePrice) + (laptopNo * laptopPrice);
    }
}

function hotelCost(nights) {
    // Parameter number of days
    // return totalCost
    // First 10 nights price 100 per night, next 10 nights price 80 per night, next onwards price 50 per night.
    let firstNPrice = 100;
    let secondNPrice = 80;
    let thirdNPrice = 50;
    if (nights < 0) {
        console.log("Please enter positive value for nights");
        return 0;
    } else {
        return nights <= 10 ? parseInt(nights) * firstNPrice : (nights <= 20 ? (10 * firstNPrice) + (parseInt(nights) - 10) * secondNPrice : (10 * firstNPrice) + (10 * secondNPrice) + (parseInt(nights) - 20) * thirdNPrice);
    }
}

function megaFriend(friend) {
    // Parameter array of friends
    // return largest name
    let largestFriend = friend[0];
    for(index = 0 ; index < friend.length ; index++){
        if( largestFriend.length < friend[index].length ){
            largestFriend = friend[index];
        }
    }
    return largestFriend;
}

const kiloMeter = 25;
const convertedMeter = kilometerToMeter(kiloMeter);
console.log('Meter:', convertedMeter);

const watchQty = 15;
const phoneQty = 5;
const laptopQty = 5;
const totalPriceItem = budgetCalculator(watchQty, phoneQty, laptopQty);
console.log('Total Item Price:', '$ ' + totalPriceItem);

const nightStay = 25;
const hotelTotalCost = hotelCost(nightStay);
console.log('Total Hotel Price:', '$ ' + hotelTotalCost);

const friendList = [ 'tom' , 'jane' , 'biden' , 'james' , 'jennifer' ];
const friendMax = megaFriend( friendList );
console.log( 'Largest name:' , friendMax );
