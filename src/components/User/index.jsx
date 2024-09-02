import React, { useState } from 'react';
import userAvatar from '/imagens-svg/user.svg';
import './user.css';

export default function User() {

    const [activeModal, setActiveModal] = useState(null);

    const handleClick = (iconName) => {
        setActiveModal(iconName);
    }

    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <div className='user_container'>
            <div className='user_circle_animated'>
                <div className='user_photo'>

                    <img src={userAvatar} alt="imagem do usuário" onClick={() => handleClick('user')} />
                    {activeModal && (
                        <>
                            <div className='modal_user'>

                                <ul className='modal_user_lista'>
                                    <span>Perfil</span>
                                    <span>Histórco</span>
                                    <span>Tema</span>
                                    <span>Sobre</span>
                                    <span>Sair</span>
                                </ul>
                            </div>

                            <span className='close' onClick={closeModal}></span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
