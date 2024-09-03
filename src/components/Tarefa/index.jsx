import InputCheckbox from "../InputCheckBox";
import styled from 'styled-components';

const TarefaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    font-family: var(--fonte);
    border: 3px solid ${(props) => props.$cor}; //recebe a cor da borda via props dinamicamente
    border-radius: 0.625rem;
    padding: 0 1.25rem 0 1.25rem;
    @media screen and (min-width: 1024px){
        height: 70px;
        align-items: center;
        padding: 0 1.75rem 0 1.75rem;
    }
`
const CheckboxContainer = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--light-blue);
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 1024px){
        font-size: 2rem;
        align-items: center;
    }
`
const TarefaCategoria = styled.p`
color: ${(props) => props.$cor};
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
    border: none;
    @media screen and (min-width: 1024px){
        font-size: 1.75rem;
        align-items: center;
    }
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