var ballElt = document.getElementById("ballon");
var cadreElt = document.getElementById("cadre");

var ballWidth = parseFloat(getComputedStyle(ballElt).width);
var direction = 1;
var speed = 10;
var intervalId = null;
var xMin = 0;

function moveBall() {
    var xBall = parseFloat(getComputedStyle(ballElt).left);
    var xMax = parseFloat(getComputedStyle(cadreElt).width);
    if (xBall + ballWidth > xMax || xBall < xMin) {
        direction *= -1;
    }
    xBall += speed*direction;
    ballElt.style.left = xBall + "px";
    animationId = requestAnimationFrame(moveBall);
}

var startButton = document.getElementById("demarrer");
var stopButton = document.getElementById("arreter");

startButton.addEventListener("click", function() {
    stopButton.removeAttribute("disabled");
    startButton.setAttribute("disabled", true);
    // intervalId = setInterval(moveBall, 20);
    requestAnimationFrame(moveBall);
});

stopButton.addEventListener("click", function() {
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled", true);
    // clearInterval(intervalId);
    cancelAnimationFrame(animationId);
});