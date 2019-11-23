let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;
context.clearRect(0, 0, canvas.width, canvas.height);

let img = new Image(512, 512);
img.src = './assets/images/image.png';

let data4 = 'https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/4x4.json';
let data32 = 'https://raw.githubusercontent.com/Dziazhurny/codejam-canvas/master/assets/data/32x32.json';

let itemRadio = document.getElementsByClassName('radioButton');

document.getElementById('4x4').addEventListener('click', () => {
    itemRadio[1].style.backgroundColor = '#ffffff';
    itemRadio[2].style.backgroundColor = '#ffffff';
    itemRadio[0].style.backgroundColor = '#dfdfdf';
    action(data4);
});

document.getElementById('32x32').addEventListener('click', () => {
    itemRadio[1].style.backgroundColor = '#dfdfdf';
    itemRadio[2].style.backgroundColor = '#ffffff';
    itemRadio[0].style.backgroundColor = '#ffffff';
    action(data32);
});

document.getElementById('256x256').addEventListener('click', () => {
    itemRadio[2].style.backgroundColor = '#dfdfdf';
    itemRadio[1].style.backgroundColor = '#ffffff';
    itemRadio[0].style.backgroundColor = '#ffffff';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 128, 128);
});


function action(link) {
    fetch(link).then((result) => {
        return result.json();
    }).then((data) => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let sizePixel = 512 / data.length;

        for (let row = 0; row < data.length; row++) {
            for (let col = 0; col < data[row].length; col++) {
                if (data.length <= 4) {
                    context.fillStyle = `#${data[row][col]}`;
                } else {
                    context.fillStyle = `rgba(${data[row][col][0]},${data[row][col][1]},${data[row][col][2]},${data[row][col][3] / 255})`;
                }
                context.fillRect(col * sizePixel, row * sizePixel, sizePixel, sizePixel);
            }

        }
    });
}