import React, { useState } from "react";
import "../Checkout/checkout.css";

function Checkout() {
  // State variables to hold form field values and validation errors
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCVV] = useState("");

  // State variables to manage validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    let errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!address.trim()) {
      errors.address = "Address is required";
    }
    if (!city.trim()) {
      errors.city = "City is required";
    }
    if (!state.trim()) {
      errors.state = "State is required";
    }
    if (!zipCode.trim()) {
      errors.zipCode = "Zip code is required";
    } else if (!/^\d{6}$/.test(zipCode.trim())) {
      errors.zipCode = "Invalid zip code";
    }
    if (!nameOnCard.trim()) {
      errors.nameOnCard = "Name on card is required";
    }
    if (!cardNumber.trim()) {
      errors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(cardNumber.trim())) {
      errors.cardNumber = "Invalid card number (must be 16 digits)";
    }
    if (!expMonth.trim()) {
      errors.expMonth = "Expiration month is required";
    }
    if (!expYear.trim()) {
      errors.expYear = "Expiration year is required";
    }
    if (!cvv.trim()) {
      errors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(cvv.trim())) {
      errors.cvv = "Invalid CVV (must be 3 or 4 digits)";
    }

    // If there are validation errors, update state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      // Focus on the first erroneous input field for better UX
      const firstErrorField = document.querySelector(".error");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "start" });
        firstErrorField.focus();
      }
    } else {
      // If no errors, proceed with redirection to Razorpay payment link
      window.location.href = "https://razorpay.me/@shopper4245";
    }
  };

  // Function to handle real-time input validation and update state
  const handleInputChange = (setterFunc, value) => {
    setterFunc(value);

    // Clear the error message for the field on input change
    if (errors.hasOwnProperty(setterFunc.name)) {
      const newErrors = { ...errors };
      delete newErrors[setterFunc.name];
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <span>Full Name:</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => handleInputChange(setFullName, e.target.value)}
                placeholder="John Doe"
                aria-label="Full Name"
                aria-required="true"
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            <div className="inputBox">
              <span>Email:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(setEmail, e.target.value)}
                placeholder="example@example.com"
                aria-label="Email"
                aria-required="true"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="inputBox">
              <span>Address:</span>
              <input
                type="text"
                value={address}
                onChange={(e) => handleInputChange(setAddress, e.target.value)}
                placeholder="Room - Street - Locality"
                aria-label="Address"
                aria-required="true"
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input
                type="text"
                value={city}
                onChange={(e) => handleInputChange(setCity, e.target.value)}
                placeholder="Mumbai"
                aria-label="City"
                aria-required="true"
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>State:</span>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => handleInputChange(setState, e.target.value)}
                  placeholder="India"
                  aria-label="State"
                  aria-required="true"
                />
                {errors.state && <p className="error">{errors.state}</p>}
              </div>
              <div className="inputBox">
                <span>Zip Code:</span>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => handleInputChange(setZipCode, e.target.value)}
                  placeholder="123456"
                  aria-label="Zip Code"
                  aria-required="true"
                />
                {errors.zipCode && <p className="error">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title">Payment</h3>
            <div className="inputBox">
              <span>Cards Accepted:</span>
              <img src="images/card_img.png" alt="Cards Accepted" />
            </div>
            <div className="inputBox">
              <span>Name on Card:</span>
              <input
                type="text"
                value={nameOnCard}
                onChange={(e) => handleInputChange(setNameOnCard, e.target.value)}
                placeholder="Mr. John Doe"
                aria-label="Name on Card"
                aria-required="true"
              />
              {errors.nameOnCard && (
                <p className="error">{errors.nameOnCard}</p>
              )}
            </div>
            <div className="inputBox">
              <span>Credit Card Number:</span>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => handleInputChange(setCardNumber, e.target.value)}
                placeholder="1111222233334444"
                aria-label="Credit Card Number"
                aria-required="true"
              />
              {errors.cardNumber && (
                <p className="error">{errors.cardNumber}</p>
              )}
            </div>
            <div className="inputBox">
              <span>Exp Month:</span>
              <input
                type="text"
                value={expMonth}
                onChange={(e) => handleInputChange(setExpMonth, e.target.value)}
                placeholder="January"
                aria-label="Expiration Month"
                aria-required="true"
              />
              {errors.expMonth && <p className="error">{errors.expMonth}</p>}
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>Exp Year:</span>
                <input
                  type="text"
                  value={expYear}
                  onChange={(e) => handleInputChange(setExpYear, e.target.value)}
                  placeholder="2022"
                  aria-label="Expiration Year"
                  aria-required="true"
                />
                {errors.expYear && <p className="error">{errors.expYear}</p>}
              </div>
              <div className="inputBox">
                <span>CVV:</span>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => handleInputChange(setCVV, e.target.value)}
                  placeholder="123"
                  aria-label="CVV"
                  aria-required="true"
                />
                {errors.cvv && <p className="error">{errors.cvv}</p>}
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="proceedButton">
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}

export default Checkout;
