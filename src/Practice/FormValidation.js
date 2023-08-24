import React, { useState } from "react";

export default function FormValidation() {
  const [userDetails, setUserDetails] = useState({
    UserName: "",
    Age: "",
    Mobile: "",
    Password: "",
    ConfirmPassword: "",
    City: "-1",
  });

  const [errors, setErrors] = useState({});

  const requiredFields = {
    UserName: "User Name is required.",
    Age: "Age is required.",
    City: "City is required.",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    for (const field of Object.keys(requiredFields)) {
      if (!userDetails[field].trim()) {
        newErrors[field] = requiredFields[field];
      }
    }

    if (userDetails.UserName.trim() && !/^[A-Za-z\s]+$/.test(userDetails.UserName)) {
      newErrors.UserName = "User Name should not contain numbers or special characters.";
    }

    if (userDetails.Age && (isNaN(userDetails.Age) || userDetails.Age < 18 || userDetails.Age > 100)) {
      newErrors.Age = "Age should be a number between 18 and 100.";
    }

    if (userDetails.Mobile.trim() && !userDetails.Mobile.match(/\+91\d{10}/)) {
      newErrors.Mobile = "Invalid Mobile: +91 and 10 digits.";
    }

    if (userDetails.Password.trim() && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(userDetails.Password)) {
      newErrors.Password = "Password should contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.";
    }

    if (userDetails.ConfirmPassword !== userDetails.Password) {
      newErrors.ConfirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", userDetails);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register User</h2>
        <div>
          <label htmlFor="UserName">Name</label>
          <input
            type="text"
            name="UserName"
            value={userDetails.UserName}
            onChange={handleChange}
            required
          />
          {errors.UserName && <span>{errors.UserName}</span>}
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            name="Age"
            value={userDetails.Age}
            onChange={handleChange}
            required
          />
          {errors.Age && <span>{errors.Age}</span>}
        </div>
        <div>
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="text"
            name="Mobile"
            value={userDetails.Mobile}
            onChange={handleChange}
          />
          {errors.Mobile && <span>{errors.Mobile}</span>}
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            value={userDetails.Password}
            onChange={handleChange}
          />
          {errors.Password && <span>{errors.Password}</span>}
        </div>
        <div>
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            type="password"
            name="ConfirmPassword"
            value={userDetails.ConfirmPassword}
            onChange={handleChange}
          />
          {errors.ConfirmPassword && <span>{errors.ConfirmPassword}</span>}
        </div>
        <div>
          <label htmlFor="City">City</label>
          <select
            name="City"
            value={userDetails.City}
            onChange={handleChange}
            required
          >
            <option value="-1">Select Your City</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyd">Hyd</option>
          </select>
          {errors.City && <span>{errors.City}</span>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
