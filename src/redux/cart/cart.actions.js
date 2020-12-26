import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    //Action is an obj -> type=>Mandatory and payload=>optional
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})