let count = 0;
const btnAdd = document.getElementById('add');
const btnRem = document.getElementById('reduce');
const resultado = document.getElementById('res');
const inter = document.getElementById('inter');

function updateDisplay(){
    resultado.textContent = count;
}

function add(event){
    event.preventDefault();
    const valor = parseInt(inter.value);
    if(!isNaN(valor)) {
        count = count + valor;
        updateDisplay();
    }
}

function reduce(event){
    event.preventDefault();
    const valor = parseInt(inter.value);
    if(!isNaN(valor)){
        count = count - valor;
        updateDisplay();
    }
}

btnAdd.addEventListener('click', add);
btnRem.addEventListener('click', reduce);

const entrada =  document.getElementById('entrada');
const saida = document.getElementById('saida');

function atualizaCampo(){
    saida.textContent = entrada.value;
}

function atualizaCampo2(){
    entrada.textContent = saida.value;
}

entrada.addEventListener('input', atualizaCampo);
saida.addEventListener('input', atualizaCampo2);