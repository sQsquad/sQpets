import './titulo.css';
export default function Titulo({children, cor}){
    return(
        <h1 className="titulo_padrao dark_mode">
            {children}
        </h1>
    )
}