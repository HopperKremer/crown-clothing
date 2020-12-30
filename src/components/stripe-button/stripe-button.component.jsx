import StripeCheckout from 'react-stripe-checkout'
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51I3l2NBk9jkkd5OuRPqfe5EGU40aBGjaoxNoeDBy4KX4dubTm0Ve4rmp4gREJsPtwKLz7uJKleE6Ydx01NlFn8mm00DEoonlMi'
    
    const onToken = (token) => {
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='Ecommerce Pvt Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is ${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton