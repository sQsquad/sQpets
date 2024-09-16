import styled from "styled-components";
import Botao from "../Botao";
import Tarefa from "../Tarefa";
import ToLink from "../ToLink";
//import './cardTarefa.css';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;    
    height: auto;
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
    gap: 1.25rem;
`
const TituloCard = styled.h1`
    width: 29rem;
    height: 5rem;
    font-family: var(--fonte);
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme['--details']};
`
const ContentTasks = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
`
const Historico = styled.div`
    text-align: right;
    height: 46px;
    font-family: var(--fonte);
    font-weight: 700;
    text-decoration: none;
    color: ${props => props.theme['--destaque']};
`
const CardButton = styled.div`
    padding: 0 2.5rem;
    height: 10%;
    display: flex;
    justify-content: center;
`

export default function CardTarefa() {
    return (
        <CardContainer>
            <CardContent>
            <TituloCard>Tarefas de hoje</TituloCard>
                <ContentTasks>
                <Tarefa textLabel={"Curso JS"} name={"tarefa_1"} tag={"programação"} tempo={"01:00"} cor={'--details'}/>
                    <Tarefa textLabel={"Caminhada"} name={"tarefa_2"} tag={"exercício"} tempo={"00:30"} cor={'--destaque'}/>
                    <Tarefa textLabel={"Leitura"} name={"tarefa_3"} tag={"leitura"} tempo={"00:20"} cor={'--roxo-destaque'}/>
                    <Tarefa textLabel={"Limpeza"} name={"tarefa_4"} tag={"casa"} tempo={"00:20"} cor={'--tag-clara'}/>
                </ContentTasks>
                <Historico>
                    <ToLink>historico de tarefas</ToLink>
                </Historico>
                <CardButton>
                    <Botao children={'Iniciar Tarefa'}/>
                </CardButton>
            </CardContent>
        </CardContainer>
    )
}