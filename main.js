const dino = document.querySelector(".dino");
const grid = document.querySelector(".grid");
const alert = document.querySelector('#alert');
let gravity = 0.9;
let isJumping = false;
let isGameOver = false;

function control(e){
    if (e.code == 'Space'){
        if(!isJumping){
            jump();
        };
    };
};
document.addEventListener('keydown', control);

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

    if(!isGameOver){
        let randomTime = Math.random() * 4000;
        let obstaclePostition = 1000;
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        grid.appendChild(obstacle);
        obstacle.style.left = obstaclePostition + 'px';
    
        let timerId = setInterval(() => {
    
            if ( obstaclePostition > 0 && obstaclePostition < 60 && postition < 60){
                clearInterval(timerId);
                alert.innerHTML = 'Game Over';
                isGameOver = true;
    
                // remove all children
                while (grid.firstChild){
                    grid.removeChild(grid.lastChild);
                };
            };
    
            obstaclePostition -= 10;
            obstacle.style.left = obstaclePostition + 'px';
        }, 20);
        setTimeout(generateObstacle, randomTime)
    };
};

generateObstacle();