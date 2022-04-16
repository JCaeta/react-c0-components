import { useEffect } from "react";
import React from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }: { currency: any, showSpinner: any }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                // style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}

                onApprove={function (data: any, actions: any) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

export const PayPalPayment = () => {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}





// import "./styles.css";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

// export default function PaypalPayment(){
//     const [price, setPrice] = useState(0);
//     const createOrder = (data, actions) => {
//         return actions.order.create({
//             purchase_units: [{
//                 amount: {
//                     value: price
//                 }
//             }]
//         });
//     };

//     const onApprove = (data, actions) => {
//         return actions.order.capture();
//     };
//     function handleChange(e) {
//         setPrice(e.target.value);
//     }
//     return (
//         <center>
//             <div className="App">
//                 <h1>Doname {price} $</h1>
//                 <input
//                     type="text"
//                     onChange={handleChange}
//                     value={price}
//                     style={{ margin: 20 }}
//                 ></input>
//                 <br />
//                 <PayPalButton
//                     createOrder={(data, actions) => createOrder(data, actions)}
//                     onApprove={(data, actions) => onApprove(data, actions)}
//                 />
//             </div>
//         </center>
//     );
// }
