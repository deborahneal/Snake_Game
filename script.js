console.log('Snake');
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");
let dx = 1;
let dy = 1;
let x = 10;
let y = 10;

// creating a draw sprite function 
// this function will run every frame of the game existance

function drawSprite(){
    // since stuff on the canvas is changing, we need to clear the canvas
    ctx.clearRect(1, 0, canvas.width, canvas.height);
    // draw the square 
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.fillStyle = "#990056"
    ctx.fill();
    ctx.closePath();


    if(x + dx > canvas.width -20){
        dx = -dx;
    }else if(x + dx < 0) {
        dx = -dx;
    } else if(y + dy > canvas.height -20) {  
       dy = -dy;
    } else if(y + dy < 0){ 
       dy = -dy; 
    } else {
       x += dx;
    }  y += dy; 
    

}
//drawSprite();
setInterval(drawSprite, 10);
console.log(ctx);


