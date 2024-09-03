import InputCheckbox from "../InputCheckBox";
import "./tarefa.css";
export default function Tarefa({name, textLabel, tag, tempo, cor}) {
    return (
        <div className="tarefa_container" >
            <div className="checkbox_container"> 
                <InputCheckbox type={"checkbox"} id={name} htmlFor={name} textLabel={textLabel}/>
            </div>
            <p className="tarefa_categoria">{tag}</p>
            <p className="checkbox_container">{tempo}</p>
        </div>
    )
}