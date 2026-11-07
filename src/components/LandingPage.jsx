import React from "react";
import { Link } from "react-router-dom";
import doctors from "./images/header-img.png";

const LandingPage = () => {
  const styles = {
    heroSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2rem",
      background: "#f0f8ff", // Light background color
      position: "relative",
    },
    heroContent: {
      maxWidth: "50%",
    },
    heading: {
      fontFamily: "'Titillium Web', sans-serif", // Use the imported font
      fontWeight: "700",
      color: "#162c4b", 
      fontSize: "2.5rem",
    },
    highlight: {
      color: "#3f51b5", // Highlighted "Your Health"
    },
    paragraph: {
      fontFamily: "'Fira Sans', sans- serif",
      margin: "1rem 0",
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#666",
    },
    button: {
      display: "inline-block",
      padding: "0.75rem 1.5rem",
      background: "linear-gradient(45deg, #3f51b5, #00bcd4)",
      color: "white",
      fontSize: "18px",
      fontWeight: "500",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "background 0.1s",
      fontFamily: "'Kanit', sans- serif",
      letterSpacing: "1px",
    },
    buttonHover: {
      background: "linear-gradient(45deg, #00bcd4, #3f51b5)",
    },
    heroImage: {
      position: "relative",
      maxWidth: "50%",
    },
    imageContainer: {
      position: "relative",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div id="home">
    <section style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h1 style={styles.heading}>
          Manage your hospital information <span style={styles.highlight}> efficiently!</span>
        </h1>
        <p style={styles.paragraph}>
          Effortlessly manage your hospital reports, appointments, and medical history in one place. Stay organized and take control of your healthcare with just a few clicks.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.background = styles.buttonHover.background)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = styles.button.background)
            }
          >
            Get Started
          </button>
        </Link>

        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.background = styles.buttonHover.background)
          }
          onMouseLeave={(e) =>
            (e.target.style.background = styles.button.background)
          }
        >
          Access
        </button>
        </div>
      </div>
      <div style={styles.heroImage}>
        <div style={styles.imageContainer}>
          <img
            src={doctors} 
            alt="Healthcare professionals"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  </div>
  );
};

export default LandingPage;
