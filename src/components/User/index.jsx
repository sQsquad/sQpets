import React, { useState } from 'react';
import userAvatar from '/imagens-svg/user.svg';
import './user.css';

export default function User() {

    const [activeModal, setActiveModal] = useState(null);

    const handleClick = (iconName) => {
        console.log("Imagem clicada, deve abrir modal: ", iconName);  // Verifique se aparece no console
        setActiveModal(iconName);
    }

    const closeModal = () => {
        console.log("Fechando modal");  // Verifique se aparece no console
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
                                <p>O modal foi aberto com sucesso!</p>
                            </div>
                            <span className='close' onClick={closeModal}>Fechar Modal </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
