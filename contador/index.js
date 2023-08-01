let count = 0;
const btnAdd = document.getElementById('add');
const btnRem = document.getElementById('reduce');
const resultado = document.getElementById('res');
const inter = document.getElementById('inter');
const entrada =  document.getElementById('entrada');
const saida = document.getElementById('saida');
const form = document.getElementById('form');
const dadosEntrada = document.getElementById('formEntrada');
const btnEnviar = document.getElementById('enviar');
const intEnt = document.getElementById('ent');
const intOut = document.getElementById('out');

function intCampo1(){
    intEnt.textContent = inter.value;
    intOut.textContent = inter.value;
}

function intCampo2(){
    inter.textContent = intEnt.value;
}

function intCampo3(){
    intOut.textContent = inter.value;
}

function updateDisplay(){
    resultado.textContent = count;
    estatico.textContent = count;
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

function atualizaCampo(){
    saida.textContent = entrada.value;
}

function atualizaCampo2(){
    entrada.textContent = saida.value;
}

function enviarForms(event){
    event.preventDefault();
    alert('Seus dados foram enviados');
}

function forms(event){
    event.keyCode == 13
    event.preventDefault();
    alert('Seus dados foram enviados');
}

dadosEntrada.addEventListener('keydowm', forms)
btnEnviar.addEventListener('click', forms);
btnAdd.addEventListener('click', add);
btnRem.addEventListener('click', reduce);
entrada.addEventListener('input', atualizaCampo);
saida.addEventListener('input', atualizaCampo2);
intEnt.addEventListener('input', intCampo2);
inter.addEventListener('input', intCampo1);
intOut.addEventListener('input', intCampo3);
