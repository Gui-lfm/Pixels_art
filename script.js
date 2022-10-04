window.onload = function () {

}

const btnColor = document.getElementById('button-random-color');
const cores = document.getElementsByClassName('color');
const body = document.getElementsByTagName('body')[0]

// requisito 4
function geraCores() {
    btnColor.addEventListener('click', function () {
        for (let i = 1; i < cores.length; i += 1) {
            let corAleatoria = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            let corAtual = cores[i]
            corAtual.style.backgroundColor = corAleatoria;
        }
    })
}
geraCores();

// requisito 5
for (let i = 1; i < cores.length; i += 1) {
    const cor = cores[i]
    cor.addEventListener('click', function (event) {
        console.log(event.target.style);
    })
}

// requisito 6

function geraQuadro() {
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

geraQuadro();