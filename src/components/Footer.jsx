import React from "react";
import logos from "./images/Ca-removebg-preview (1).png";
import footerBackground from "./images/footer-bg.png"; // Import the footer background  
import line from "./images/circle_right.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <div style={{ ...styles.footer, backgroundImage: `url(${footerBackground})` }}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h2 style={styles.logo}>
            <img
              src={logos}
              alt="logos"
              style={styles.Img}
            />
            <span style={styles.logoText}>HEALTH HUB</span>
          </h2>
          <p style={styles.description}>
            Helping you stay on top of your health with easy-to-use tools. Your well-being, made simple with Health Hub.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeader}>Links
            <img src={line} alt="line" style={styles.line} />
          </h3>
          <ul style={{ ...styles.links, ...styles.linkList }}>
            <li
              style={styles.listItem}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <span style={styles.link}
                  onClick={() => scrollToSection("home")}>
                <span style={styles.bullet}>&gt;</span> Home
              </span>
            </li>
            <li
              style={styles.listItem}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <Link to="/home" style={styles.link}>
                <span style={styles.bullet}>&gt;</span> Dashboard
              </Link>
            </li>
            <li
              style={styles.listItem}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <span style={styles.link}
                  onClick={() => scrollToSection("about")}>
                <span style={styles.bullet}>&gt;</span> About Us
              </span>
            </li>
            <li
              style={styles.listItem}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <span style={styles.link}
                  onClick={() => scrollToSection("testimonial")}>
                <span style={styles.bullet}>&gt;</span> Testimonial
              </span>
            </li>
            <li
              style={styles.listItem}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
            >
              <span style={styles.link}
                onClick={() => scrollToSection("contact")}>
                <span style={styles.bullet}>&gt;</span> Contact Us
              </span>
            </li>
          </ul>

        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeader}>Contact Us
            <img src={line} alt="line" style={styles.line} />
          </h3>
          <p style={styles.links}>
            <i className="fas fa-phone-alt" style={styles.contactIcon}></i> 1800-121-3637 <br />
            +91 555 234-8765
          </p> <br />
          <p style={styles.links}>
            <i className="fas fa-envelope" style={styles.contactIcon}></i> info@example.com <br />
            sale@example.com
          </p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        © 2020 HealthHub
      </div>
    </div>
  );
};
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const styles = {
  footer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    flex: "1 1 200px",
    margin: "10px",
  },
  logo: {
    display: "flex",
    fontSize: "24px",
    color: "#0033a0",
    gap: "10px",
  },
  Img: {
    width: "22%",
    height: "22%",
  },
  logoText: {
    fontSize: "35px",
    fontWeight: "500",
    color: "#053c5c",
    fontFamily: "'Barlow Condensed', sans-serif",
  },
  line: {
    marginTop: "20px",
  },
  description: {
    fontFamily: "'Inter', sans- serif",
    fontSize: "14px",
    color: "#838181",
    margin: "10px 0",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    fontSize: "18px",
    color: "#0033a0",
    cursor: "pointer",
  },
  sectionHeader: {
    fontFamily: "'Titillium Web', sans-serif",
    fontSize: "20px",
    color: "#013243",
    marginBottom: "10px",
    fontWeight: "700",
  },
  links: {
    fontFamily: "'Inter', sans-serif",
    listStyle: "none",
    padding: 0,
    margin: 0,
    color: "#4A5764",
    lineHeight: "1.8",
    fontSize: "15px",
  },
  contactIcon: {
    marginRight: "8px",
    color: "#0033a0",
  },
  footerBottom: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "#333",
  },
  linkList: {
    listStyleType: "none", // Removes default bullets
    paddingLeft: "0", // Aligns the list properly
    marginTop: "10px",
  },
  listItem: {
    position: "relative", // Enables custom bullet positioning
    marginBottom: "8px",
    cursor: "pointer", // Pointer cursor on hover
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    color: "#4A5764",
    display: "flex",
    alignItems: "center", // Aligns bullet and text
    transition: "transform 0.3s ease", // Smooth hover effect
  },
  bullet: {
    marginRight: "10px", // Space between bullet and text
    color: "#220f9d", // Violet color for the ">" bullet
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default Footer;
