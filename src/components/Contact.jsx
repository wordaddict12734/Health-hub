import React from "react";
import Doctor from "./images/touch-illustration.png";

const Contact = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f8faff",
      borderRadius: "8px",
      gap: "30px",
      marginRight: '50px',
    },
    leftSection: {
      width: "30%", // Reduced to make space for the larger image
    },
    image: {
      width: "100%",
      height: "auto",
      maxWidth: "900px", // Enlarged the max width
    },
    rightSection: {
      width: "60%",
      backgroundColor: "#ffffff",
      padding: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    title: {
      fontFamily: "'Titillium Web', sans-serif",
      fontSize: "50px",
      fontWeight: "600",
      color: "#03254c",
      marginTop: "30px",
      textAlign: "left", // Center align the title
      marginBottom: "10px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center align all items
      justifyContent: "center",
      gap: "20px",
      width: "100%",
    },
    input: {
      borderRadius: "20px",
      padding: "10px 35px",
      fontSize: "16px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "border 0.3s",
      width: "100%", // Make all inputs span 100% of the container
      fontFamily: "'Titillium Web', sans-serif", // Use the imported font

    },
    textarea: {
      minHeight: "100px", // Slightly taller for better usability
      padding: "10px 15px",
      fontSize: "16px",
      borderRadius: "20px", // Match the inputs
      border: "1px solid #ccc",
      outline: "none",
      resize: "none",
      transition: "border 0.3s",
      width: "100%", // Match inputs
    },
    select: {
      borderRadius: "20px",
      padding: "10px 35px",
      fontSize: "16px",
      border: "1px solid #ccc",
      outline: "none",
      transition: "border 0.3s",
      width: "100%", // Match inputs
    },
    button: {
      fontFamily: "'Fira Sans', sans- serif",
      padding: "12px 40px", // Slightly wider for better UI
      fontSize: "16px",
      fontWeight: "bold",
      color: "#ffffff",
      background: "linear-gradient(to right, #007bff, #00d4ff)",
      border: "none",
      borderRadius: "20px", // Match other elements
      cursor: "pointer",
      transition: "opacity 0.3s",
    },
    buttonHover: {
      opacity: "0.8",
    },
    heading: {
      fontFamily: "'Inter', sans- serif",
      color: "#1E0B9B",
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "10px",
      letterSpacing: "2px",
    },
    box: {
      backgroundColor: "#d2ceeb",
      padding: "5px 0px",
    },
  };
  return (
    <div id="contact">
    <div style={styles.container}>
      {/* Left Section: Illustration */}
      <div style={styles.leftSection}>
        <img
          src={Doctor}
          alt="Doctor"
          style={styles.image}
        />
      </div>

      {/* Right Section: Form */}
      <div style={styles.rightSection}>
        <h4 style={styles.heading}><span style={styles.box}>CON</span>TACT</h4>
        <h2 style={styles.title}>Get In Touch With Us</h2>
        <form style={styles.form}>
          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
            <input
              type="text"
              placeholder="First Name"
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              style={styles.input}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Write here your email"
            style={styles.input}
            required
          />
          <input
            type="Subject"
            placeholder="I would like to discuss"
            style={styles.input}
            required
          />
          <textarea
            placeholder="Write comments"
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
