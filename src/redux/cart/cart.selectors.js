import { createSelector } from "reselect";
import userReducer from "../user/user.reducer";

// state = {
//     user: userReducer,
//     cart: cartReducer
// }
// state.cart
// cart.cartItems

//input sel


const selectCart = state => state.cart


//for selecting cart items

export const selectCartItems = createSelector(
    [selectCart], 
    (
        cart => cart.cartItems
    )
)

//for selecting item count
export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    (
        cartItems => cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity
        ,0 )
    )
)

//for hidden prop

export const selectCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden
)

//sel cart total
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity*cartItem.price
    ,0))
)