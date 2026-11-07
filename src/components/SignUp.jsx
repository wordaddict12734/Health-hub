import React, { useState } from "react"; // Import useState
import login from "./images/login.png";

const SignUp = () => {
  const [userType, setUserType] = useState("doctor"); // Default to 'doctor'

  const handleChange = (e) => {
    setUserType(e.target.value); // Update the user type based on selection
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={login}
            alt="Doctors"
            className="w-200 h-300"
          />
        </div>

        {/* Right Section: Signup Form */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-black font-bold mb-4">Sign Up</h1>
          <p className="mb-6 text-lg text-black">
            Create your account to access hospital services!
          </p>

          {/* Form */}
          <form className="space-y-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            />

            <select
              value={userType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900"
            >
              <option value="" disabled>Select Role</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>

            {/* Sign Up Button */}
            <button className="bg-blue-600 w-full py-3 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </form>

          {/* Link to login */}
          <p className="mt-4 text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
