import styled from 'styled-components'

const CheckboxContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
`
const StyledInputCheckbox = styled.input`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    font-family: ${(props) => props.theme['fonte']};
    font-weight: 700;
    color: ${(props) => props.theme['--details']};
    background: ${(props) => props.theme['--bg-color']};

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`
const Label = styled.label`
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 300px;

    @media (max-width: 480px) {
        max-width: 80px;
    }
`

export default function InputCheckbox({ name, type, textLabel }) {
    return (
        <CheckboxContainer>
            <StyledInputCheckbox
                type={type}
                id={name}
            />
            <Label
                className='label'
                htmlFor={name}
            >
                {textLabel}
            </Label>
        </CheckboxContainer>
    )
}