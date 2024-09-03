import Header from "../../components/header"
import './homepage.css'
import AsideImagem from '../../components/Aside-Imagem';
import CriarTarefa from "../../components/botao-criar-tarefa";
import CardTarefa from "../../components/CardTarefa";

export default function HomePage() {

    // const AsideImg = AsideImagem();

    return (
        <>
            <Header />
            <section>
                <div className="Container">
                    <CardTarefa />
                </div>
                <div className="Container--img">
                    <AsideImagem />
                    <CriarTarefa />
                </div>
            </section>
            

        </>
        

    )
    
}