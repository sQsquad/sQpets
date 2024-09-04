import Header from "../../components/header"
import './homepage.css'
import AsideImagem from '../../components/Aside-Imagem';
import Botao from '../../components/Botao';

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
                    <Botao>Criar Tarefa</Botao>
                </div>
            </section>
            

        </>
        

    )
    
}