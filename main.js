const dino = document.querySelector(".dino");
const grid = document.querySelector(".grid");

function control(e){
    if (e.code == 'space'){
        jump()
    };
};

document.addEventListener('keydown', control);