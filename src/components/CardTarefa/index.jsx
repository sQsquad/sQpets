import Botao from "../Botao";
import ToLink from "../ToLink";
import './cardTarefa.css';

export default function CardTarefa() {
    return (
        <div className="card_container">
            <div className="card_content">
                <h1 className="titulo">Tarefas de hoje</h1>
                <div className="content_tasks">

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