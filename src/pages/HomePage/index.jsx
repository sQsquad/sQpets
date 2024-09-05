import Header from "../../components/header"
import './homepage.css'
import CardTarefa from "../../components/CardTarefa";
import Pet from "../../components/Pet"

export default function HomePage() {

    // const AsideImg = AsideImagem();

    return (
        <>
            <Header/>
            <section>
                <CardTarefa />
                <Pet/>
            </section>
        </>
    )
    
}