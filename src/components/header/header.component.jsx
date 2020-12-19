import './header.styles.scss'

import {Link} from 'react-router-dom'

//Syntax allow React to know it is a logo
//for a react element that renders svg
import {ReactComponent as Logo} from '../../assets/crwns.svg'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </div>
)
export default Header;