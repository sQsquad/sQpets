import './botao-criar-tarefa.css';

export default function CriarTarefa () {

    function TarefaCriada (){
        alert("Tarefa criada com sucesso");
    }
    
    return (
        <button onClick={TarefaCriada} className='btn-criar-tarefa'>Criar tarefa</button>
    )
}