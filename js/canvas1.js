const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");

let xPos;
let yPos;

//Mouse event to get mouseposition
document.addEventListener('mousemove', mousPos,  false);

function mousPos (evt){
    xPos = evt.pageX - canvas.offsetLeft;
    yPos = evt.pageY - canvas.offsetTop;
}


//Draw functions
function drawText(tekst){
    ctx1.beginPath();
    ctx1.font = "15px Helvetica";
    ctx1.fillStyle = "black";
    ctx1.fillText (tekst, 10, 25);
    ctx1.closePath();
}


//Render function
function draw(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    drawText("Mouse position= " + "X" + xPos + ", " + "Y" + yPos);

    window.requestAnimationFrame(draw);
}

draw();
