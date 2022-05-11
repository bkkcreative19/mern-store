import React from "react";
import "./OrderList.scss";

export const OrderList = ({ orders }) => {
  return (
    <section className="order-list">
      {orders.map((order, idx) => {
        return (
          <div className="orderItem" key={idx}>
            <p className="order-id">Order {order._id}</p>
            <div className="orderItem__list">
              {order.orderItems.map((item, idx) => {
                return (
                  <div key={idx} className="orderItem__list-item">
                    <img src={item.productImage} alt="" />
                    <p>{item.productName}</p>
                  </div>
                );
              })}
            </div>
            {/* {order.totalPrice} */}
          </div>
        );
      })}
    </section>
  );
};
