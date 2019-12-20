function gameBackGround() {
     let audio = document.getElementById('soundefect-waves');
    audio.currentTime = 0;
	audio.volume =1;
    audio.play();

    let marea = 200;
    let mareaSpeed =.5;

    let enemy ={
		x:400,
		y:200,
		w:40,
		h:40
	} 

let player={
    x:400,
    y:400,
    w:20,
    h:20
}
function playWalking(){
    let audio = document.getElementById('walking-sound');
    audio.currentTime = 0;
    audio.play();

}


    document.addEventListener("keydown", keydownHandler);
    function keydownHandler() {
        keySpaceKeyIsPressed = true;
        if(event.code == ("ArrowRight") && keySpaceKeyIsPressed){
           player.x +=20;
            playWalking();
							   
       }
       if(keySpaceKeyIsPressed && event.code == ("ArrowLeft")){
        player.x -= 20;
        playWalking();
       }
       if(event.code== ("ArrowDown") && keySpaceKeyIsPressed){
           player.y += 20;
           playWalking();
       }
       if(event.code== ("ArrowUp") && keySpaceKeyIsPressed){
        player.y -= 20;
        playWalking();
    }
    }
//	function fighting(){
//		if (player.y >= enemy.y && player.x >= enemy.x){
//			 ctx.fillStyle = "yellow";
//        ctx.fillRect(0, 0, cnv.width, cnv.height);
//		}
//	}
    
    requestAnimationFrame(mgameMap);
    function mgameMap() {
        ctx.fillStyle = "rgb(219, 195, 95)";
        ctx.fillRect(0, 0, cnv.width, cnv.height);
       
        document.getElementById('p1').innerHTML = "USE THE ARROW KEYS TO MOVE";
        

        marea += mareaSpeed
        if (marea >= 300 || marea <= 200) {
            mareaSpeed = -mareaSpeed;
        }
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, marea, cnv.height);
       
        ctx.fillStyle = "red";
        ctx.fillRect(player.x, player.y, player.w, player.h);
        
        ctx.fillStyle = "green";
        ctx.fillRect(enemy.x, enemy.y, enemy.h, enemy.w);
		
		 //fighting();
        
        requestAnimationFrame(mgameMap);
    }

}


