import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hdw3GC487jsW5berlv3ZeHzHjBZMOSMGMxGk4H7RLyXYv2sXjoKpV0bee8lPe7CHewzsdsFtnRIYhTavUJnr2TP00rnyZcxhO"

const onToken = token => {
    console.log(token);
    alert ("Payment Successful");
}



    return (
        <StripeCheckout
            label ="Pay Now"
            name="EJs Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token= {onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;