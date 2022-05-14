import { useSelector, useDispatch } from "react-redux";
import { listOrders } from "../../actions/orderActions";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect } from "react";
import { OrderList } from "../../components";
import { useNavigate } from "react-router-dom";

import "./ProfilePage.scss";
import { logout } from "../../actions/userActions";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderList = useSelector((state) => state.orderList);

  const { orders } = orderList;

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(listOrders());
  }, []);
  return (
    <section className="profile container">
      <h2>Account</h2>
      <div onClick={handleLogOut} className="logout">
        <AiOutlineUser />
        <span>Log out</span>
      </div>
      <div className="orders">
        <h3>Order History</h3>
        {!orders ? (
          <p>You havent placed any orders yet</p>
        ) : (
          <OrderList orders={orders} />
        )}
      </div>
    </section>
  );
};
