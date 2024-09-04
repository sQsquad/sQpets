import Header from "../../components/header";
import CardTarefa from "../../components/CardTarefa";
import GlobalStyle from "../../Styles/GlobalStyle";
import Tarefa from "../../components/Tarefa";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    align-items: center;
`

export default function Dashboard() {
    return (
        <>
        <GlobalStyle />
        <Header/>
        <Main>
        <CardTarefa />
        </Main>
        </>
    )
}