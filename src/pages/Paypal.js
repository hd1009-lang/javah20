import React from "react";
import ReactDOM from "react-dom"
import { connect } from "react-redux";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal() {
  const totalPrice = localStorage.getItem('totalPrice');
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: localStorage.getItem('totalPrice'),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
const mapStateToProps = state => {
  return {
    orderInfo: state.orderData.orders,
  };
};
export default connect(mapStateToProps)(Paypal);