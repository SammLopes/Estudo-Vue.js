const btnAdd = document.getElementById('add');
const btnRem = document.getElementById('remove');
const input = document.querySelector('input');
const listaUl = document.querySelector('ul');

function adicionarObjetivo(event){
    event.preventDefault();
    const valor = input.value;

    //verificando se o valor é vazio ou não
    if(valor.trim() === ''){
        alert("Digite um objetivo");
        return;
    }

    //Criando elemento da lsita Ul
    const itemLi = document.createElement('li');
    itemLi.textContent = valor;

    //Criando o botão de remover do lado da descrição do objetivo
    const remove = document.createElement('button');
    remove.textContent = 'Remover'
    //Descreve a função do botão de remover do lado do objetivo
    remove.addEventListener('click', function(){
        listaUl.removeChild(itemLi);
    });

    //Adiciona um item a lista e o botão de remover que fica do lado do objetivo.
    listaUl.appendChild(itemLi);
    itemLi.appendChild(remove);
    input.value = '';

}

//Descreve a função que deleta objetivos de baixo para cima.
function removerObjetivo(){
    //seleciona todos os elementos dentro da lista Ul
    const itensLi = listaUl.querySelectorAll('li');
    if(itensLi.length > 0){
        //Seleciona o ultimmo elemento e o remove de dentro da listaUl
        const ultimoLi = itensLi[itensLi.length - 1];
        listaUl.removeChild(ultimoLi);
    }

}

//Atribui as funções acima a os seus respectivos botões
btnAdd.addEventListener('click', adicionarObjetivo);
btnRem.addEventListener('click', removerObjetivo);