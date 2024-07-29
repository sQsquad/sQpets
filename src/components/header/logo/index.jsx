import sQpetsLogo from '../../../../public/imagens-svg/sQpets.svg';
import './logo.sass'

export default function Logo() {
    return (
        <img src={sQpetsLogo} className="logo" alt="logo"/>
    );
}
