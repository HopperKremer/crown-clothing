//Utility functions allow us to keep files clean and organize functions


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    //Find Method returns true or undef

    if(existingCartItem){
        return cartItems.map(
            cartItem =>
            (cartItem.id === cartItemToAdd.id) ?
            {...cartItem, quantity: cartItem.quantity +1}
            :
            cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
