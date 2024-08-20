import sQpetsLogo from '/imagens-svg/sQpets.svg'
import './logo.css'

export default function Logo() {
    return (
        <div className='app_logo'>
            <img src={sQpetsLogo} className="logo" alt="logo"/>
        </div>
    
    );
}
