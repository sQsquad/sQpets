import Botao from "../Botao";
import ToLink from "../ToLink";
import './cardTarefa.css';

export default function CardTarefa() {
    return (
        <div className="card-container">
            <div className="card-content">
                <h1 className="titulo">Tarefas de hoje</h1>
                <div className="content-tasks">
                    {/* <div className="task-container">
                        <input type="checkbox" />
                        <h1>Curso JS</h1>
                        <p>programação</p>
                        <span>01:00</span>
                    </div>
                    <div className="task-container">
                        <input type="checkbox" />
                        <h1>Curso JS</h1>
                        <p>programação</p>
                        <span>01:00</span>
                    </div>
                    <div className="task-container">
                        <input type="checkbox" />
                        <h1>Curso JS</h1>
                        <p>programação</p>
                        <span>01:00</span>
                    </div>
                    <div className="task-container">
                        <input type="checkbox" />
                        <h1>Curso JS</h1>
                        <p>programação</p>
                        <span>01:00</span>
                    </div> */}
                </div>
                <div className="historico">
                    <ToLink>historico de tarefas</ToLink>
                </div>
                <div className="card-button">
                    <Botao children={'Iniciar Tarefa'}/>
                </div>
            </div>
        </div>
    )
}