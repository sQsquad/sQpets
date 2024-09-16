import Header from "../../components/header"
import CardTarefa from "../../components/CardTarefa";
import Pet from "../../components/Pet";
import styled from "styled-components";

const Section = styled.section`
    padding: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 90%;
    @media screen and (max-width: 1024px){
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: auto;
        padding: 1.5rem;
    }
`

export default function HomePage() {

    // const AsideImg = AsideImagem();

    return (
        <>
            <Header/>
            <Section>
                <CardTarefa />
                <Pet/>
            </Section>
        </>
    )
    
}