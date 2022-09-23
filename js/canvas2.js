const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

let ray = 25;

let xPos2 = ray;
let yPos2 = ray;
let dx = 2;
let dy = 3;

//Draw function
function smiley(x, y, r) {
    ctx2.beginPath();
    ctx2.arc(x, y, r, 0, 2 * Math.PI);
    ctx2.fillStyle = "yellow";
    ctx2.fill();

    ctx2.moveTo(x + 17.5, y);
    ctx2.arc(x, y, 17.5, 0, Math.PI);
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(x - 7.5, y - 5, 3.5, 0, 2 * Math.PI);
    ctx2.moveTo(x + 7.5, y - 5);
    ctx2.arc(x + 7.5, y - 5, 3.5, 0, 2 * Math.PI);
    ctx2.fillStyle = "black";
    ctx2.fill();
};

//Rennder function
function slide() {

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    smiley(xPos2,yPos2,ray);
    xPos2 +=dx;
    yPos2 +=dy;

    //collisions to declare direction and speed
    if (xPos2 > canvas2.width-ray) {

        dx = -(Math.floor(Math.random()*5));
    }
    if (xPos2 < ray) {

        dx = +(Math.floor(Math.random()*(5)));
    }

       if (yPos2 > canvas2.height-ray) {

        dy = -(Math.floor(Math.random()*5));
    }
    if (yPos2 < ray) {

        dy = +(Math.floor(Math.random()*5));
    }

    window.requestAnimationFrame(slide);

}


slide();
