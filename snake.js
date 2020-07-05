const board = document.getElementById('board');
const ctx = board.getContext('2d');

function initializeBoard() {
    for(let y = 0; y < 850; y += 50) {
        if(y % 100 === 0) {
            for(let x = 0; x < 850; x += 50) {
                ctx.fillStyle = 'red';
                ctx.fillRect(x, y, 50, 50);
            }
            for(let x = 50; x < 850; x += 100) {
                ctx.fillStyle = 'pink';
                ctx.fillRect(x, y, 50, 50);
            }
        } else {
            for(let x = 0; x < 850; x += 50) {
                ctx.fillStyle = 'pink';
                ctx.fillRect(x, y, 50, 50);
            }
            for(let x = 50; x < 850; x += 100) {
                ctx.fillStyle = 'red';
                ctx.fillRect(x, y, 50, 50);
            }
        }
    }
}

let foodImage = new Image();
foodImage.src = './asset/images/apple.png';

const food = {
    x: Math.floor(Math.random()*17) * 50,
    y: Math.floor(Math.random()*17) * 50
}

window.onload = () => {
    initializeBoard();
    ctx.drawImage(foodImage, food.x, food.y, 50, 50);
}