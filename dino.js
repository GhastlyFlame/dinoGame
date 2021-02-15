const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    

        setTimeout(function () {
        dino.classList.remove("jump");
        }, 300);
    }    
}

let isAlive = setInterval(function () {
    // console.log("check");
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); //get Dino Y axis pos
    // console.log(dinoTop);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); //get cactus x axis pos
    // console.log(cactusLeft);

    //check hits
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        //hits
        // console.log("bonk");
        alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event){
    jump();
});