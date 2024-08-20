import './desktop-header.css'
import Logo from '../logo'
import User from '../icon-user'
import Icons from '../icons-modal'


export default function DesktopHeader () {

    return (

        <header className='desktop_header'>
            <Logo/>
            <Icons/>
            <User/>
        </header>
             
    )
}
