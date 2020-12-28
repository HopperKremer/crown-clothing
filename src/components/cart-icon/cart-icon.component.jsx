import './cart-icon.styles.scss'

import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

//sending data to store
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
//reduce
//Takes 2 params:
//callback(memoizedPart, new)
//and initial val for memoization
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
}) 

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon) 