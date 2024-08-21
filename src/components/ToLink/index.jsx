/* eslint-disable react/prop-types */
// import {Link} from 'react-router-dom';
import './ToLink.sass'

export default function ToLink({children}) {
    return (
        <a
            className='link'
            href="#"
            target="_blank"
        >
            {children}
        </a>
    )
}