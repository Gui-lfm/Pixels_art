window.onload = function () {

    if (localStorage.getItem('colorPalette') === null) {
        storageColors(listaCores);
        for (let i = 0; i < cores.length; i += 1) {
            let cor = cores[i]
            cor.style.backgroundColor = listaCores[i]
        }
    } else {
        let novaLista = JSON.parse(localStorage.colorPalette)
        for (let i = 0; i < cores.length; i += 1) {
            const cor = cores[i];
            if (i === 0) {
                cor.style.backgroundColor = listaCores[i]
            }
            cor.style.backgroundColor = novaLista[i - 1];
        }

    }
}

const btnColor = document.getElementById('button-random-color');
const cores = document.getElementsByClassName('color');
const body = document.getElementsByTagName('body')[0]
const listaCores = ["rgb(0, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 0, 255)"]

function storageColors(lista) {
    localStorage.setItem('colorPalette', JSON.stringify(lista));
}

// requisito 4
function geraCores() {
    let coresGeradas = []
    for (let i = 1; i < cores.length; i += 1) {
        let corAleatoria = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        let corAtual = cores[i]
        coresGeradas.push(corAleatoria);
        corAtual.style.backgroundColor = corAleatoria;
    }
    storageColors(coresGeradas);
}

btnColor.addEventListener('click', geraCores)


// requisito 6 e 7
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

// requisito 9

function selecionaCor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

for (let i = 0; i < cores.length; i += 1) {
    const cor = cores[i]
    cor.addEventListener('click', selecionaCor)
}

// requisito 10
