// Action Creator 
export const setCurrentUser = user => (
    // Action
    {
        type: 'SET_CURRENT_USER', // Mandatory
        payload: user // payload is an optional 
    }
)

// // Action Creator 
// export const addToCart = productDetail => (
//     // Action
//     {
//         type: 'ADD_TO_CART', // Mandatory
//         payload: productDetail // payload is an optional 
//     }
// )