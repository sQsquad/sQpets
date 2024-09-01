import './mobile-header.css'
import Logo from '../logo'
import User from '../../User'
import Icons from '../icons-modal'


export default function MobileHeader () {

    return (
        <>

            <header className='mobile_header'>
                <Logo/>
                <User/>
            </header>

            <div className='mobile_header_absolute'>
                <Icons/>
            </div>
        
        </>
    )
}
