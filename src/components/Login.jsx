import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "./images/login.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // Start with Login form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    language: "", // Default language
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // for toggling password visibility

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between Login and SignUp
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    let validationErrors = {};

    // Validate required fields
    if (!formData.email) validationErrors.email = "Email is required!";
    if (!formData.password) validationErrors.password = "Password is required!";

    if (!isLogin) {
      if (!formData.fullName) validationErrors.fullName = "Full name is required!";
      if (!formData.confirmPassword) validationErrors.confirmPassword = "Confirm password is required!";
      else if (formData.password !== formData.confirmPassword)
        validationErrors.confirmPassword = "Passwords do not match!";
    }

    if (!formData.language || (formData.language !== "doctor" && formData.language !== "patient")) {
      validationErrors.language = "Please select a valid role!";
    }

    setErrors(validationErrors);

    // If no validation errors, navigate to the selected role's page
    if (Object.keys(validationErrors).length === 0) {
      console.log("Navigating to:", formData.language); // Debugging
      navigate(`/${formData.language}`);
    }
  };


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

  // Define styles as JavaScript objects
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      color: 'black',
    },
    flipContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.6s',
    },
    flipToSignup: {
      transform: 'rotateY(180deg)',
    },
    flipToLogin: {
      transform: 'rotateY(0deg)',
    },
    flipSide: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    front: {
      backgroundColor: 'white',
    },
    back: {
      backgroundColor: 'white',
      transform: 'rotateY(180deg)',
    },
    img: {
      transition: 'transform 0.6s',
    },
    imgHover: {
      transform: 'scale(1.05)',
    },
    formContainer: {
      fontFamily: "'Titillium Web', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      justifyContent: 'center',
      textAlign: 'center',
      width: '40%',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      color: '#1f2937',
    },
    button: {
      backgroundColor: '#1D4ED8',
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2563EB',
    },
    errorText: {
      color: 'red',
      fontSize: '12px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '960px' }}>
        <div
          style={{
            ...styles.flipContainer,
            ...(isLogin ? styles.flipToLogin : styles.flipToSignup),
          }}
        >
          {/* Front Side (Login) */}
          <div style={{ ...styles.flipSide, ...styles.front }}>
            <div style={styles.formContainer}>
              <h1 className="text-4xl font-bold mb-4">Login</h1>
              <p className="mb-6 text-lg">Welcome Back!</p>
              <form className="space-y-4 w-full max-w-sm" onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                <div style={{ position: 'relative' }}>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    style={styles.input}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.password && <p style={styles.errorText}>{errors.password}</p>}
                  <button
                    type="submit"
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                  >
                    Login
                  </button>
              </form>
              <p className="mt-4 text-gray-400">
                Don't have an account?{" "}
                <button
                  onClick={handleToggle}
                  className="text-blue-500 hover:underline"
                  style={{ color: '#2563EB', textDecoration: 'underline' }}
                >
                  Sign Up
                </button>
              </p>
            </div>
            <div style={{ width: '50%', marginBottom: '8px' }}>
              <img
                src={login}
                alt="login"
                style={styles.img}
                onMouseEnter={(e) => e.target.style.transform = styles.imgHover.transform}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          </div>

          {/* Back Side (Sign Up) */}
          <div style={{ ...styles.flipSide, ...styles.back }}>
            <div style={{ width: '50%', marginBottom: '8px' }}>
              <img
                src={login}
                alt="signup"
                style={styles.img}
                onMouseEnter={(e) => e.target.style.transform = styles.imgHover.transform}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={styles.formContainer}>
              <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
              <p className="mb-6 text-lg">Create your account to access hospital services!</p>
              <form className="space-y-4 w-full max-w-sm" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  style={styles.input}
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <p style={styles.errorText}>{errors.fullName}</p>}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                <div style={{ position: 'relative' }}>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    style={styles.input}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.password && <p style={styles.errorText}>{errors.password}</p>}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  style={styles.input}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}

                {/* Language Dropdown */}
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  style={styles.input}
                >
                  <option value="" disabled>Select Role</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
           
                <button
                  type="submit"
                  style={styles.button}
                  onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                >
                  Sign Up
                </button>
              </form>
              <p className="mt-4 text-gray-400">
                Already have an account?{" "}
                <button
                  onClick={handleToggle}
                  className="text-blue-500 hover:underline"
                  style={{ color: '#2563EB', textDecoration: 'underline' }}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
