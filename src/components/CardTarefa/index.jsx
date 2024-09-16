import styled from "styled-components";
import Botao from "../Botao";
import Tarefa from "../Tarefa";
import ToLink from "../ToLink";
import './cardTarefa.css';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 2rem 0 2rem 0;
    border: 4px solid #87C7CF;
    border-radius: 10px;
    background-color: ${props => props.theme['--fundo-modal']};
    box-sizing: border-box;
    text-align: center;
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 90%;
    gap: 2rem;
`
const TituloCard = styled.h1`
    width: 29rem;
    height: 5rem;
    font-family: var(--fonte);
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme['--details']};
`

export default function CardTarefa() {
    return (
        <CardContainer>
            <CardContent>
            <TituloCard>Tarefas de hoje</TituloCard>
                <div className="content_tasks">
                <Tarefa textLabel={"Curso JS"} name={"tarefa_1"} tag={"programação"} tempo={"01:00"} cor={'--details'}/>
                    <Tarefa textLabel={"Caminhada"} name={"tarefa_2"} tag={"exercício"} tempo={"00:30"} cor={'--destaque'}/>
                    <Tarefa textLabel={"Leitura"} name={"tarefa_3"} tag={"leitura"} tempo={"00:20"} cor={'--roxo-destaque'}/>
                    <Tarefa textLabel={"Limpeza"} name={"tarefa_4"} tag={"casa"} tempo={"00:20"} cor={'--tag-clara'}/>
                </div>
                <div className="historico">
                    <ToLink>historico de tarefas</ToLink>
                </div>
                <div className="card_button">
                    <Botao children={'Iniciar Tarefa'}/>
                </div>
            </CardContent>
        </CardContainer>
    )
}