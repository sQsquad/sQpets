// import {Link} from 'react-router-dom';


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