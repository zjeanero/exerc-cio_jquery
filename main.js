const form = document.getElementById('form-tarefas')
const listaTarefas = $("#lista-tarefas");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let novaTarefa = $("#input-tarefa").val();

    if (novaTarefa) {
        $("#lista-tarefas").append("<li>" + novaTarefa + "</li>");
        $("#input-tarefa").val('');
    }
    $('#lista-tarefas').on('click', 'li', function() {

        $(this).toggleClass('completo');
    });
    
    
});
