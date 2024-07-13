const dino = document.querySelector(".dino");
const grid = document.querySelector(".grid");
let gravity = 0.9;

function control(e){
    if (e.code == 'Space'){
        jump();
    };
};

let postition = 0
function jump(){
    let timerId = setInterval(() => {

        // move up
        postition += 30;
        postition = postition * 0.9
        dino.style.bottom = postition + 'px';

    }, 20);

}

document.addEventListener('keydown', control);