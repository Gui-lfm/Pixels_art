// variáveis globais
const btnColor = document.getElementById('button-random-color');
const btnClear = document.getElementById('clear-board');
const colors = document.getElementsByClassName('color');
const body = document.getElementsByTagName('body')[0];
const colorList = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 0, 255)'];
let brush = colorList[0];
let numPixels = 5;
const board = document.createElement('section');
board.id = 'pixel-board';

function storageColors(list) {
  localStorage.setItem('colorPalette', JSON.stringify(list));
}

function storagePixels(pixels) {
  localStorage.setItem('pixelBoard', pixels);
}

function geraCorAleatoria() {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);

  return `rgb(${a}, ${b}, ${c})`;
}

// requisito 4
function geraPaletaAleatoria() {
  const coresGeradas = [];
  for (let i = 1; i < colors.length; i += 1) {
    const corAleatoria = geraCorAleatoria();
    const corAtual = colors[i];
    coresGeradas.push(corAleatoria);
    corAtual.style.backgroundColor = corAleatoria;
  }
  storageColors(coresGeradas);
}

btnColor.addEventListener('click', geraPaletaAleatoria);

// requisito 5

if (localStorage.getItem('colorPalette') === null) {
  storageColors(colorList);
  for (let i = 0; i < colors.length; i += 1) {
    const cor = colors[i];
    cor.style.backgroundColor = colorList[i];
  }
} else {
  const newList = JSON.parse(localStorage.colorPalette);

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    if (i === 0) {
      color.style.backgroundColor = colorList[i];
    }
    color.style.backgroundColor = newList[i - 1];
  }
}

// requisito 6 e 7
function createBoard(pixels) {
  board.innerHTML = '';
  const boardArea = pixels * pixels;
  for (let i = 0; i < boardArea; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    board.appendChild(pixel);
  }
  body.appendChild(board);
}
createBoard(numPixels);
const pixels = document.getElementsByClassName('pixel');

// requisito 9
function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
  brush = document.querySelector('.selected').style.backgroundColor;
}

for (let i = 0; i < colors.length; i += 1) {
  const color = colors[i];
  color.addEventListener('click', selectColor);
}

// requisito 10
function paintPixels(event) {
  const saveboard = [];
  const pixelSelecionado = event.target;
  pixelSelecionado.style.backgroundColor = brush;
  saveboard.push(board);
  storagePixels(saveboard[0].innerHTML);
}

for (let i = 0; i < pixels.length; i += 1) {
  const pixel = pixels[i];
  pixel.addEventListener('click', paintPixels);
}

// requisito 11
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    storagePixels(board.innerHTML);
  }
}
btnClear.addEventListener('click', clearBoard);

// requisito 12
if (localStorage.getItem('pixelBoard')) {
  board.innerHTML = '';
  board.innerHTML = localStorage.pixelBoard;
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.addEventListener('click', paintPixels);
  }
}

// requisito 13 e 14
const boardSize = document.getElementById('board-size');
const boardSizeBtn = document.getElementById('generate-board');

function changeSize() {
  numPixels = boardSize.value;
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else {
    createBoard(numPixels);
  }
}

boardSizeBtn.addEventListener('click', changeSize);
