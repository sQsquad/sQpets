import styled from 'styled-components'

const CheckboxContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    `;

const StyledInputCheckbox = styled.input`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    font-weight: 700;
    
    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
    `;

const LabelWrapper = styled.div`
    display: flex;
    height: auto;
    flex: 1;
    min-width: 0;
    `;

const Label = styled.label`
    display: block;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    color: ${(props) => props.theme['--details']};
    font-family: ${(props) => props.theme['fonte']};
    
    @media (max-width: 480px) {
        max-width: 80px;
    }
`;

export default function InputCheckbox({ name, type, textLabel }) {
    return (
        <CheckboxContainer>
            <StyledInputCheckbox type={type} id={name} />
            <LabelWrapper>
                <Label htmlFor={name}>{textLabel}</Label>
            </LabelWrapper>
        </CheckboxContainer>
    )
}