module.exports = function main(input) {
        distance=input.distance;
        parkTime=input.parkTime;
        if (distance<0 || parkTime<0) {
            console.log("您的输入有误，请重新输入！");
            return NaN;
        }
        var price=6;
        if (distance>=2) {
            price+=0.8*(distance-2)
        }
        if (distance>=8) {
            price+=(distance-8)*0.8*0.5
        }
        price+=parkTime*0.25
        return Math.round(price);
};
