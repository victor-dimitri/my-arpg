// Setup the canvas and the graphics context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
cnv.width = 800;
cnv.height = 800;

// Globall sun Variables
let redSun = 0;
let sunPosition = 600;
let sunSize = 40;

// space key status
let keySpaceKeyIsPressed = false;

//mouse movment
let mouseisPressed = false;
let mouseX, mouseY;

//Make the initial animation
requestAnimationFrame(loop);
function loop() {

    if (keySpaceKeyIsPressed) {
        document.getElementById('p1').innerHTML = "";// control the animation with the space bar

        // update the sun bariables 
        sunSize += 0.15;
        sunPosition--;
        redSun++;

        // control the sky
        if (sunPosition > 200) {
            // Draw the sky
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, 0, 800, 600); // draw a filled square
        }






        // Draw the Sun
        ctx.lineWidth = 5;

        ctx.fillStyle = "rgb(255," + redSun + ",0)";

        ctx.beginPath();
        if (sunPosition > 200) {


            


            ctx.arc(400, sunPosition, sunSize, 0, 2 * Math.PI);// animate the sun as the updated bariables indicate


            ctx.fill();


        }


        if (sunPosition > 200) {// control the grass animation
            // Draw the grass
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 600, 800, 200); // draw a filled square
            ctx.lineWidth = 5;
        }
    }



    requestAnimationFrame(loop);
}


// add event listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);




// event handlers
function keydownHandler(event) {
    if (event.code == "Space") {
        keySpaceKeyIsPressed = true;
        removekeydownHandler();



        setTimeout(drawText, 8000);
        setTimeout(newGame, 8000);
        //setTimeout(Options, 4000);


        let audio = document.getElementById('mymusic');
        audio.currentTime = 0;
        audio.play();
    }


}
function mousedownHandler() {
    mouseisPressed = true;

}
function mouseupHandler() {
    mouseisPressed = false;
}
function mousemoveHandler(event) {
    let cnvRect = cnv.getBoundingClientRect();
   
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}


function drawText() {
    // DRAW TEXT
    ctx.font = '40px Comic Sans MS';
    ctx.fillStyle = 'black';
    ctx.fillText('New Game', 300, 400);
    // // DRAW TEXT
    // ctx.font = '20px Comic Sans MS';
    // ctx.fillStyle = 'black';
    // ctx.fillText('Options', 150, 250);
}

// goback text
//function goback() {
//    // DRAW TEXT
//    ctx.font = '20px Comic Sans MS';
//    ctx.fillStyle = 'black';
//    ctx.fillText('Back', 0, 400);
//    if (mouseX <= 48 && mouseY <= 400 && mouseX >= 0 && mouseY >= 390 && mouseisPressed) {
//        // Draw the grass
//        ctx.fillStyle = 'green';
//        ctx.fillRect(0, 300, 400, 100); // draw a filled square
//        ctx.lineWidth = 5;
//
//        // Draw the sky
//        ctx.fillStyle = 'blue';
//        ctx.fillRect(0, 0, 400, 300); // draw a filled square
//
//        ctx.lineWidth = 5;
//        ctx.fillStyle = "rgb(255,  255 ,0)";
//        ctx.beginPath();
//        ctx.arc(200, 100, 50, 0, 2 * Math.PI);// animate the sun as the updated bariables indicate
//        ctx.fill();
//
//        // DRAW TEXT
//        ctx.font = '20px Comic Sans MS';
//        ctx.fillStyle = 'black';
//        ctx.fillText('New Game', 150, 200);
//        // DRAW TEXT
//        ctx.font = '20px Comic Sans MS';
//        ctx.fillStyle = 'black';
//        ctx.fillText('Options', 150, 250);
//
//       
//
//
//
//
//    
//    }
//    requestAnimationFrame(goback);
//}
//
//
//








// buttons functions
function newGame() {

    if (mouseX <= 480 && mouseY <= 400 && mouseX >= 300 && mouseY >= 360 && mouseisPressed) {
        
        removehandler();
        
        


        gameBackGround();
        
        stopMusic();
        esplorationMusic();
    }
    requestAnimationFrame(newGame);
}
// function Options() {

//     if (mouseX <= 220 && mouseY <= 250 && mouseX >= 150 && mouseY >= 240 && mouseisPressed) {
//         ctx.fillStyle = 'rgb(232, 239, 194)';
//         ctx.fillRect(0, 0, cnv.width, cnv.height);

       

//         goback();



//     }
//     requestAnimationFrame(Options);
    
// }



function stopMusic() {

    let audio = document.getElementById('mymusic');
    audio.currentTime = 0;
    audio.pause();

}
function esplorationMusic() {
    let audio = document.getElementById('melancolia-1');
    audio.currentTime = 0;
    audio.play();

}


// remove event listeners
function removehandler() {
    document.removeEventListener("mousedown", mousedownHandler);
}
function removekeydownHandler() {
    document.removeEventListener("keydown", keydownHandler);
}
