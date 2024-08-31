import "./tarefa.css";
export default function Tarefa() {
    return (
        <div className="tarefa_container">
            <div className="checkbox_container"> 
                <input type="checkbox" className="tarefa_input" name="tarefa"/>
                <label for="tarefa">Curso JS</label>
            </div>
            <p className="tarefa_categoria">Programação</p>
            <p className="checkbox_container">01:00</p>
        </div>
    )
}