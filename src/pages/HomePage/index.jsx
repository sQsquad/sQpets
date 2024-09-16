import Header from "../../components/header"
import CardTarefa from "../../components/CardTarefa";
import Pet from "../../components/Pet";
import styled from "styled-components";

const Section = styled.section`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 1024px){
        flex-direction: column-reverse;
        justify-content: flex-end;
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