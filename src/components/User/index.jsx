import userAvatar from '/imagens-svg/user.svg'
import './user.css'

export default function User () {

    return (
        <div className='user_container'>
            <div className='user_circle_animated'>
                <div className='user_photo'>
                    <img src={userAvatar} alt="imagem do usuario"/>
                </div>
            </div>
        </div>


    )
}
