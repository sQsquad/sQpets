import InputCheckbox from "../InputCheckBox";
import styled from 'styled-components';

const TarefaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 80px;
    font-family: var(--fonte);
    border: 3px solid ${(props) => props.$cor}; //recebe a cor da borda via props dinamicamente
    border-radius: 0.625rem;
    padding-left: 1.75rem;
`
const CheckboxContainer = styled.div`
    font-size: 2.25rem;
    font-weight: bold;
    color: var(--light-blue);
    display: flex;
    text-align: center;
    justify-content: center;
    border: none;
`
const TarefaCategoria = styled.p`
color: ${(props) => props.$cor};
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    border: none;
`

export default function Tarefa({name, textLabel, tag, tempo, cor}) {
    return (
        <TarefaContainer $cor={cor}>
            <CheckboxContainer> 
                <InputCheckbox type={"checkbox"} id={name} htmlFor={name} textLabel={textLabel}/>
            </CheckboxContainer>
            <TarefaCategoria $cor={cor}>{tag}</TarefaCategoria>
            <CheckboxContainer>{tempo}</CheckboxContainer>
        </TarefaContainer>
    )
}