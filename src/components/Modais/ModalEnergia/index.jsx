import styled from "styled-components";
import energia from '/imagens-svg/energy.svg';
import video from '/imagens-svg/vd.png';

const ModalContainer = styled.div`
    width: 85vw;
    max-width: 600px;
    height: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background-color: ${props => props.theme['--fundo-modal']};
    
    @media (min-width: 768px) {
        width: 100%;
        h1 {
            font-size: 2rem;
        }
    };
    
    @media (min-width: 1024px) {
        width: 40vw;
        h1 {
            font-size: 2.5rem;
        }
    };`

const ModalHeader = styled.h1`
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
    color: ${props => props.theme['--text-color']};
    strong {
        color: ${props => props.theme['--destaque']};
    };`

const ModalEnergiaAtual = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        color: ${props => props.theme['--text-color']};
        font-size: 2rem;
    };
    img {
        width: 107px;
        height: auto;
    };`

const ModalRecarregarEnergia = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        text-align: center;
        color: ${props => props.theme['--text-color']};
        font-size: 1.5rem;
    };
    img {
        width: 50px;
        height: auto;
    };`


export default function ModalEnergia() {
    return (
        <ModalContainer>
            <ModalHeader>
                Use sua <strong>energia</strong> para criar tarefas!
            </ModalHeader>
            <ModalEnergiaAtual>
                <p>50/50</p>
                <img src={energia} alt="ícone de energia" />
            </ModalEnergiaAtual>
            <ModalRecarregarEnergia>
                <p>Assista vídeos para ganhar mais energia!</p>
                <img src={video} alt="ícone verde de um vídeo" />
            </ModalRecarregarEnergia>
        </ModalContainer>
    )
}