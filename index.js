// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(hq - someValue);
}

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let price = null;
    let travelDistance = distanceTravelledInFeet(start, destination)
    if (travelDistance <= 400) {
        return price = 0;
    } else if (travelDistance > 400 && travelDistance <= 2000) {
        return price = (travelDistance - 400) * 0.02;
    } else if (travelDistance > 2000 && travelDistance <= 2500) {
        return price = 25;
    } else if (travelDistance > 2500) {
        return 'cannot travel that far'
    }
}
