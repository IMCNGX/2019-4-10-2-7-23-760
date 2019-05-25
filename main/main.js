module.exports = function main(inputs) {
    let totalPrice = 6.0;
    const timesOverBaseKilometer = 0.5;
    const baseKilometer = 2;
    const separateKilometer = 8;
    const pricePerKilometer = 0.8;
    const pricePerWaitMinute = 0.25;

    if (distance > 2 && distance <= 8) {
        totalPrice += pricePerKilometer * (distance - baseKilometer)
    }
    if (distance > 8) {
        totalPrice += pricePerKilometer * (separateKilometer - baseKilometer) + pricePerKilometer * (1 + timesOverBaseKilometer) * (distance - separateKilometer);
    }
    totalPrice += pricePerWaitMinute * parkTime;
    return Math.round(totalPrice);
    //return "price";
};
