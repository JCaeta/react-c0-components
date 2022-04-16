
import React from 'react';
import { PayPalPayment } from '../../index';

export default
{
    title: 'PayPalPayment',
    component: PayPalPayment,
    args: {
        // Storybook passes empty functions by default for props like `onShippingChange`.
        // This turns on the `onShippingChange()` feature which uses the popup experience with the Standard Card button.
        // We pass null to opt-out so the inline guest feature works as expected with the Standard Card button.
        onShippingChange: null,
        amount: "2",
        currency: "USD",
        size: 750,
        showSpinner: false,
        style: {
            layout: "vertical",
        },
        disabled: false,
    },
}

export const Primary = () => <PayPalPayment/>;
