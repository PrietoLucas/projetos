let btnAddTarefa = document.querySelector('#adicionar-tarefa')
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')

btnAddTarefa.onclick = function(){
    let valorDigitado = inputTarefa.value;

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

tarefas.innerHTML +=tarefaNova
}

