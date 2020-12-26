import './header.styles.scss'

import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crwns.svg'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

// import { ReactComponent as Logo }
// This is a new special syntax when importing SVG in React. 
// The ReactComponent import name is special and tells Create React App 
// that you want a React component that renders an SVG, rather than its filename. 
// You can read more about it here, but keep in mind that this is a 
// React library special syntax:

// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>

            {
                currentUser ? 
                <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
            
        </div> 
        {hidden ? null: <CartDropDown/>}
    </div>
   
)

//getting data back from store
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    // currentUser: user.currentUser,
    // hidden: hidden
    currentUser,
    hidden
})

export default connect(mapStateToProps, null)(Header)