
import logos from "./images/Ca-removebg-preview (1).png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      padding: "10px 20px",
    },
    navbarContainer: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // Align items to the corners
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      width: "70px",
      height: "60px",
      marginRight: "10px",
    },
    logoText: {
      fontSize: "25px",
      fontWeight: "500",
      color: "#053c5c",
      fontFamily: "'Barlow Condensed', sans-serif",
    },
    navAndButtonContainer: {
      display: "flex",
      alignItems: "center", // Align links and button horizontally
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      fontFamily: "'Barlow Condensed', sans-serif",
      textDecoration: "none",
      fontWeight: "500",
      color: "#174ab5",
      fontSize: "18px",
      margin: "0 15px",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    navLinkHover: {
      color: "#8e44ad",
    },
    loginBtn: {
      fontFamily: "'Titillium Web', sans-serif",
      background: "linear-gradient(90deg, #2c3e50, #3498db)",
      color: "white",
      border: "none",
      borderRadius: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background 0.3s ease, transform 0.2s",
      textDecoration: "none", // Ensures the button behaves like a link
    },
    loginBtnHover: {
      background: "linear-gradient(90deg, #3498db, #2c3e50)",
      transform: "scale(1.05)",
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        {/* Logo Section */}
        <Link to="/" style={styles.logo}>
        <div style={styles.logo}>
          <img
            src={logos}
            alt="logos"
            style={styles.logoImage}
          />
          <span style={styles.logoText}>HEALTH HUB</span>
        </div>
        </Link>

        {/* Navigation Links and Log In Button */}
        <div style={styles.navAndButtonContainer}>
          <ul style={styles.navLinks}>
            <Link to="/" style={styles.logo}>
            <li>
              <span
                style={styles.navLink}
                onClick={() => scrollToSection("home")}
              >
                Home
              </span>
            </li>
            </Link>
            <Link to="/about" style={styles.navLink}>
            <li>
              <span
                style={styles.navLink}
                onClick={() => scrollToSection("about")}
              >
                About Us
              </span>
            </li>
            </Link>
            <Link to="/testimonial" style={styles.navLink}>
            <li>
              <span
                style={styles.navLink}
                onClick={() => scrollToSection("testimonial")}
              >
                Testimonial
              </span>
            </li>
            </Link>
            <Link to="/contact" style={styles.navLink}>
            <li>
              <span
                style={styles.navLink}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </span>
            </li>
            </Link>
          </ul>
          <a
            href="/login"
            style={styles.loginBtn}
            onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #3498db, #2c3e50)")
            }
            onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #2c3e50, #3498db)")
            }
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
