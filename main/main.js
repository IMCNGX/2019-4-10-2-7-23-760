function taxiFee(distance,waiting) {
    let result = 6;
    if(waiting>0){
        result += waiting * 0.25;
    }
    if(distance > 2){
        if(distance <= 8){
            result += (distance - 2) * 0.8;
        } else {
            result += (8 - 2) * 0.8 + (distance - 8) * 0.8 * 1.5;
        }
    }
    return Math.round(result);

}

module.exports = taxiFee;
