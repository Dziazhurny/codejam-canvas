let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;
context.clearRect(0, 0, canvas.width, canvas.height);

let img = new Image(512, 512);
img.src = './assets/images/image.png';

let data4 = 'assets\data\4x4.json';
let data32 = 'assets\data\32x32.json';

let itemRadio = document.getElementsByClassName('radioButton');

document.getElementById('256x256').addEventListener('click', () => {
    itemRadio[2].style.backgroundColor = '#dfdfdf';
    itemRadio[1].style.backgroundColor = '#ffffff';
    itemRadio[0].style.backgroundColor = '#ffffff';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 128, 128);
});