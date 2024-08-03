import sQpetsLogo from '../../../../public/imagens-svg/sQpets.svg'
import './logo.sass'

export default function Logo() {
    return (
        <div className='app_logo'>
            <img src={sQpetsLogo} className="logo" alt="logo"/>
        </div>
    
    );
}
