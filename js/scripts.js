function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function init() {
positionScrollIcons();

scrollHint();
}
function scrollHint() {
    let drones = document.getElementsByClassName('scroll-down-img');

let droneNo = 0;
    var timer = setInterval(function () {
//        for (let drone of drones) {
        let drone = drones[droneNo];
            drone.style.display = 'block';

                    fade(drone);
                    ++droneNo;
        if (droneNo > drones.length-1){
            droneNo =0;
        }

    }, 180);

}
function positionScrollIcons() {
    let drones = document.getElementsByClassName('scroll-down-img');
    let topY = 0;
        for (let drone of drones) {

            drone.style.top = topY+"px";

            topY = topY + 15;
        }
}


function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);
}


function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}


window.onload = init;