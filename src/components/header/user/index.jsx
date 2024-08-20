import userAvatar from '/imagens-svg/user.svg'
import './user.css'

export default function User () {
    return (
        <div className='icone_avatar'>
            <img src={userAvatar} className="user" alt="imagem do usuario"/>
        </div>
    )
}
