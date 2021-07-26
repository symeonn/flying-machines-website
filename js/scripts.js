function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function init() {

positionScrollIcons();

scrollHint();

        AOS.init();
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

    }, 100);

}
function positionScrollIcons() {
    let drones = document.getElementsByClassName('scroll-down-img');
    let topY = 0;
        for (let drone of drones) {

            drone.style.top = topY+"px";

            topY = topY + 12;
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
    }, 20);
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

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("mainNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

window.onload = init;