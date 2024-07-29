import './header.sass'
import Icons from './icons-modal'
import Logo from './logo'
import User from './user'


export default function Header () {

    return (
        <>
            <header className="header">
                <Logo/>
                <Icons/>
                <User/>
            </header>
        </>
    )
}