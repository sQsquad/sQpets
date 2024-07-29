import userAvatar from '../../../../public/imagens-svg/user.svg'
import './user.sass'

export default function User () {
    return (
        <img src={userAvatar} className="user" alt="imagem do usuario"/>
    )
}
