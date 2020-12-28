import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    //Action is an obj -> type=>Mandatory and payload=>optional
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

//rem
export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

//CLEAR
export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})
