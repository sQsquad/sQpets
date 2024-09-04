import Botao from "../Botao";
import Tarefa from "../Tarefa";
import ToLink from "../ToLink";
import './cardTarefa.css';

export default function CardTarefa() {
    return (
        <div className="card_container">
            <div className="card_content">
                <h1 className="titulo">Tarefas de hoje</h1>
                <div className="content_tasks">
                    <Tarefa textLabel={"Curso JS"} name={"tarefa_1"} tag={"programação"} tempo={"01:00"} cor={"var(--dark-blue)"}/>
                    <Tarefa textLabel={"Caminhada"} name={"tarefa_2"} tag={"exercício"} tempo={"00:30"} cor={"var(--destaque)"}/>
                    <Tarefa textLabel={"Leitura"} name={"tarefa_3"} tag={"leitura"} tempo={"00:20"} cor={"var(--roxo-destaque)"}/>
                    <Tarefa textLabel={"Limpeza"} name={"tarefa_4"} tag={"casa"} tempo={"00:20"} cor={"var(--texto-claro)"}/>
                </div>
                <div className="historico">
                    <ToLink>historico de tarefas</ToLink>
                </div>
                <div className="card_button">
                    <Botao children={'Iniciar Tarefa'}/>
                </div>
            </div>
        </div>
    )
}