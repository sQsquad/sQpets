import Header from "../../components/header"
import Titulo from "../../components/Titulo"
import Botao from "../../components/Botao"
import './naoencontrada.css';

export default function NaoEncontrado() {
    return (
        <>
            <Header />
            <div className="naoEncontrado_principal">
                <Titulo>OPS! Página não encontrada!</Titulo>
                <Botao>Voltar</Botao>
            </div>
        </>
        
    )
}