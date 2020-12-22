//Action creator
export const setCurrentUser = user => (
    //action
    {
        type: 'SET_CURRENT_USER', //mandatory
        payload: user //optional
    }
)


// export const addToCart = productDetail => (
//     //action
//     {
//         type: 'ADD_TO_CART', //mandatory
//         payload: productDetail //optional
//     }
// )