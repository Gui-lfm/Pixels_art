const btnColor = document.getElementById('button-random-color');
const cores = document.getElementsByClassName('color');

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
