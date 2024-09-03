import Header from "../../components/header"
import Titulo from "../../components/Titulo"
import GlobalStyle from "../../Styles/GlobalStyle";

export default function NaoEncontrado() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Titulo>OPS! Página não encontrada!</Titulo>                
        </>
    )
}