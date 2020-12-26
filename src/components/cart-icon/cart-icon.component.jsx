import './cart-icon.styles.scss'

import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartHidden } from '../../redux/cart/cart.actions';
const CartIcon = ({toggleCartHidden}) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

//sending data to store
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps) (CartIcon) 