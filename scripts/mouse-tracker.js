var canvas = document.getElementById("mouseTrackerContainer");
var ball = document.getElementById("ball");

var xmouse, ymouse;
canvas.addEventListener("mousemove", function (e) {
    xmouse = e.clientX;
    ymouse = e.clientY;
});

var x = void 0, y = void 0, dx = void 0, dy = void 0, key = -1;

function followMouse() {
    key = requestAnimationFrame(followMouse);
    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    }
    else {
        dx = (xmouse - x)*.125;
        dy = (ymouse - y)*.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        }
        else {
            x += dx;
            y += dy;
        }
    }
    ball.style.left = (x-innerWidth/4-10) + 'px';
    ball.style.top = (y-innerHeight*7/20-10) + 'px';
}