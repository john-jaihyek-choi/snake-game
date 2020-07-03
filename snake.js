const board = document.getElementById('board');
const ctx = board.getContext('2d');

let foodImage = new Image();
foodImage.src = './asset/images/apple.png';
foodImage.onload = () => {
    ctx.drawImage(foodImage, 10, 10, 50, 50);
}