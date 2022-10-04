window.onload = function () {

    if (localStorage.getItem('colorPalette') === null) {
        storageColors(colorList);
        for (let i = 0; i < colors.length; i += 1) {
            let cor = colors[i]
            cor.style.backgroundColor = colorList[i]
        }
    } else {
        let newList = JSON.parse(localStorage.colorPalette)
        for (let i = 0; i < colors.length; i += 1) {
            const color = colors[i];
            if (i === 0) {
                color.style.backgroundColor = colorList[i]
            }
            color.style.backgroundColor = newList[i - 1];
        }
    }
}

// variáveis locais
const btnColor = document.getElementById('button-random-color');
const colors = document.getElementsByClassName('color');
const body = document.getElementsByTagName('body')[0]
const colorList = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 0, 255)'];
let brush = colorList[0];

function storageColors(list) {
    localStorage.setItem('colorPalette', JSON.stringify(list));
}

// requisito 4
function geraCores() {
    let coresGeradas = []
    for (let i = 1; i < colors.length; i += 1) {
        let corAleatoria = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        let corAtual = colors[i]
        coresGeradas.push(corAleatoria);
        corAtual.style.backgroundColor = corAleatoria;
    }
    storageColors(coresGeradas);
}

btnColor.addEventListener('click', geraCores)

// requisito 6 e 7
function createBoard() {
    const board = document.createElement('section');
    board.id = 'pixel-board';
    let numPixels = 25;

    for (let i = 0; i < numPixels; i += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        board.appendChild(pixel);
    }
    body.appendChild(board);
}

createBoard();
const pixels = document.getElementsByClassName('pixel');

// requisito 9
function selectColor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    brush = document.querySelector('.selected').style.backgroundColor;
}

for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i]
    color.addEventListener('click', selectColor)
}

// requisito 10
function paintPixels(event) {
    let pixelSelecionado = event.target;
    pixelSelecionado.style.backgroundColor = brush;
}

for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i]
    pixel.addEventListener('click', paintPixels)
}
