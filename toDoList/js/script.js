let btnAddTarefa = document.querySelector('#adicionar-tarefa')
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')
let btnRmTarefa = document.querySelector('#botao-tarefa-ok')

const criarTarefa = (event) => {
    if (event.keyCode == 13 || event.type == "click") {
        let valorDigitado = inputTarefa.value;
        if (valorDigitado == "") {
            return (alert('Você deve digitar uma tarefa primeiro!'))
        }
        inputTarefa.value = "";
        let tarefaNova = `<div class="col-md-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${valorDigitado}
        </div>
        <div id="botao-tarefa-ok">
            <img src="./img/check.png" width="32" alt="Botão de Finalizar Tarefa"
                title="Botão de finalizar Tarefa">
        </div>
    </div>
    </div>`
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild

        let btnCheckTarefa = objTarefaNova.lastElementChild.lastElementChild

        btnCheckTarefa.onClick = (event) =>{
            
        }
    }
}

inputTarefa.addEventListener('keypress', criarTarefa);
btnAddTarefa.addEventListener('click', criarTarefa);