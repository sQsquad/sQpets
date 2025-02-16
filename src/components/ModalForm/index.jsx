import { useState } from 'react';
import Botao from '../Botao';
import './modalform.css';
import InputSubmit from '../InputSubmit';
import { IoCloseCircle } from "react-icons/io5";

export default function ModalForm({ onSubmit, onclose }) {

    const [nome, setNome] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [tempo, setTempo] = useState('');
    const [idUsuario, setIdUsuario] = useState('e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68');

    const controlarSubmissao = (e) => {
        e.preventDefault();
        onSubmit({ nome, tempo: Number(tempo), idUsuario, idCategoria });
        onclose();
    }


    return(
        <>
            <div className='modal__overlay'>
                <div className='form__container'>
                    <IoCloseCircle className='close__icon' onClick={onclose} />
                    <form onSubmit={controlarSubmissao} className='form'>
                        <div className='container__tarefa'>
                            <label>Nome da tarefa</label>
                            <input className='tarefa__input' value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
                        </div>
                        <div className='container__tarefa'>
                            <label>Categoria</label>
                            <input className='tarefa__input' type="text" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} />
                        </div>
                        <div className='container__tarefa'>
                            <label>Tempo (minutos)</label>
                            <input className='tarefa__input' type="number" value={tempo} onChange={(e) => setTempo(e.target.value)} />
                        </div>

                        <Botao type='submit' >Criar tarefa</Botao>
                        

                    </form>
                </div>
                
            </div>
        </>
        
        
    )
}