import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, update the state to show errors
      setErrors(validationErrors);
    } else {
      // If no errors
      console.log("Email:", email, "Password:", password);

      // Reset errors
      setErrors({});
    }
  };
  // Function to check if the email is in a valid format
  const isValidEmail = (email) => {
    // Use a simple regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full p-3 border rounded-md outline-none ${
            errors.email ? "border-red-500" : ""
          } focus:shadow-sm `}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className={`w-full p-3 border rounded-md outline-none ${
            errors.password ? "border-red-500" : ""
          } focus:shadow-sm `}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
