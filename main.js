const dino = document.querySelector(".dino");
const grid = document.querySelector(".grid");
let gravity = 0.9;
let isJumping = false

function control(e){
    if (e.code == 'Space'){
        if(!isJumping){
            jump();
        };
    };
};

let postition = 0
function jump(){
    isJumping = true;
    let count = 0;
    let timerId = setInterval(() => {

        // move down
        if (count === 15){
            clearInterval(timerId);
            let downTimerId = setInterval(() => {
                if (count === 0){
                    clearInterval(downTimerId);
                    isJumping = false;
                };
                postition -= 5;
                count--;
                postition = postition * 0.9;
                dino.style.bottom = postition + 'px';
            });
        };

        // move up
        postition += 30;
        count++;
        postition = postition * 0.9;
        dino.style.bottom = postition + 'px';

    }, 20);
};

function generateObstacle(){
    let obstaclePostition = 10000;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    grid.appendChild(obstacle);
    obstacle.style.left = obstaclePostition + 'px';
}

generateObstacle();

document.addEventListener('keydown', control);