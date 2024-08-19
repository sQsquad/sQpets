import './botao.css';

export default function Botao({children}) {
    return (
        <button className="botao_padrao">{children}</button>
    )
}