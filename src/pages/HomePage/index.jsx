import Header from "../../components/header"
import './homepage.css'
import AsideImagem from '../../components/Aside-Imagem';

export default function HomePage() {

    // const AsideImg = AsideImagem();

    return (
        <>
            <Header />
            <section>
                <div className="Container">

                </div>
                <div className="Container--img">
                    <AsideImagem />
                </div>
            </section>
            

        </>
        

    )
    
}