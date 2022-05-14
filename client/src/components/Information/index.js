import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import "./Information.scss";

export const Information = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [apartment, setApartment] = useState(shippingAddress.apartment);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [state, setState] = useState(shippingAddress.state);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !postalCode ||
      !country ||
      !state
    ) {
      alert("Field cannot be empty");
      return;
    }

    dispatch(
      saveShippingAddress({
        firstName,
        lastName,
        address,
        apartment: apartment ? apartment : "",
        city,
        country,
        state,
        postalCode,
      })
    );
    navigate("/checkout/shipping");
  };

  return (
    <section className="information">
      <h2>Shipping address</h2>
      <form onSubmit={submitHandler} className="info-form">
        <div className="name">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <input
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          type="text"
          className="address"
          value={address}
        />
        <input
          placeholder="Apartment (optional)"
          type="text"
          className="apartment"
          onChange={(e) => setApartment(e.target.value)}
          value={apartment}
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          type="text"
          className="city"
          value={city}
        />
        <div className="country-state">
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <input
            type="text"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
          <input
            type="text"
            placeholder="Zip"
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
          />
        </div>
        <div className="buttons">
          <button onClick={submitHandler} className="continue-shopping">
            Continue to Shipping
          </button>

          <Link to="/cart">
            <button className="return-to-cart">Return to cart</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
